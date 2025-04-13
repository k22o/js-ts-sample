import React from 'react';

type Props = {
  urlList: string[];
};

export function List(props: Props) {
  const urlList = props.urlList;
  const listElement = urlList.map((url, index) => (
    <li key={index}>{url}</li>
  ));

  return (
    <section>
      <h2>一覧</h2>
      <ul>{listElement}</ul>
    </section>
  );
}