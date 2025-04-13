type Props = {
  selectedEnvType: string
  onChange: any
}

interface EnvValue {
  label: string
  value: string
}

export function EnvTypeForm(props: Props) {
  
  const envTypes: EnvValue[] = [
    {label: "dev", value: "dev環境"},
    {label: "prod", value: "prod環境"}
  ]

  return (
    <section>
      <h3>環境</h3>
      <div className="envTypeList">
        {envTypes.map((envType, index) => {
            return (
              <label key={index}>
                <input type="radio" name="envType" value={envType.label} 
                  checked={envType.label === props.selectedEnvType} onChange={props.onChange}/>
                <span> {envType.value} </span>
              </label>
            )
        })}
      </div>
    </section>
  )
}
  
