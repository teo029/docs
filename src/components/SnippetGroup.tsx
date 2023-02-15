import React from 'react';
import useUserPreferencesContext from "@theme/hooks/useUserPreferencesContext";
import getLanguagesForPlatform from "@site/src/lib/getLanguagesForPlatform";
import snippets from '../../snippets.json';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '../theme/Tabs';
import TabItem from '../theme/TabItem';
import LANGUAGES from './Languages.js';

const getContext = (id) => LANGUAGES.find((context) => context.id === id);

const pathExists = (context, path, data) => {
  let docs = data[context].versions[0].docs
  let some = docs.some((doc) => doc.path === path);
  return some
};

export function Snippet({name, language, label}) {
  let lang = snippets[language]
  let printableText
  if (lang) {
    let snippet = lang[name]
    if (snippet) printableText = snippet
  } 
  if (!printableText) {
    console.error(`no snippet for ${name} in language=${language}`)
    return <div>Not supported by {label}.</div>
  }
  return (
    <CodeBlock className={language}>
        {printableText.trim().replace('00000000-0000-4000-0000-000000000000', 'REPLACE_ME_WITH_YOUR_APP_ID')}
    </CodeBlock>
  );
}


export default function SnippetGroup({children, name}) {
  const { tabGroupChoices, setTabGroupChoices } = useUserPreferencesContext();

  const currContext = getContext(tabGroupChoices["platform"]);
  let platform = currContext ? currContext.id : "ios"
  const languages = getLanguagesForPlatform(platform)
  const lang = languages[0]
  
  return <Tabs
    platform={platform}
    groupId="programming-language"
    defaultValue={lang ? lang.value : 'swift'}
    values={languages}
  >
    {languages.map(language => {
      return (
        <TabItem key={`${language.value}-${name}`} value={language.value}>
          <Snippet name={name} language={language.value} label={language.label} />
        </TabItem>
      )
    })}
  </Tabs>

}