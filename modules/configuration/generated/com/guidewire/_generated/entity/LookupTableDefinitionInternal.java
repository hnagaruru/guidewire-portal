package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LookupTableDefinition.eti;LookupTableDefinition.eix;LookupTableDefinition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LookupTableDefinitionInternal extends com.guidewire._generated.entity.EditableInternal {
  /**
   * Adds the given element to the Inputs array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToInputs(entity.LookupTableInputColumn element);
  
  
  /**
   * Adds the given element to the OutputArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToOutputArray(entity.LookupTableOutputColumn element);
  
  
  /**
   * Gets the value of the EntityName field.
   * Entity Name for the entity backed lookup table. If not entity backed, it should be Null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEntityName();
  
  
  /**
   * Gets the value of the Inputs field.
   * The list of column definitions for this matching operation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LookupTableInputColumn[] getInputs();
  
  
  /**
   * Gets the value of the Output field.
   * The factor definition for this lookup table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LookupTableOutputColumn getOutput();
  
  
  /**
   * Gets the value of the OutputArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LookupTableOutputColumn[] getOutputArray();
  
  
  public gw.pl.persistence.core.Key getOutputID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LookupTableDefinition getSubtype();
  
  
  /**
   * Gets the value of the TableCode field.
   * The lookup table code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableCode();
  
  
  /**
   * Gets the value of the TableDesc field.
   * Description of the lookup data that is stored by this table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableDesc();
  
  
  /**
   * Gets the value of the TableName field.
   * The logical name of the lookup table. Note: The lookup table data is stored in a separate physical table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableName();
  
  
  /**
   * Gets the value of the Existence field.
   * Indicates that this lookup table is for an existence lookup
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isExistence();
  
  
  /**
   * Removes the given element from the Inputs array. This is achieved by marking the element for removal.
   */
  public void removeFromInputs(entity.LookupTableInputColumn element);
  
  
  /**
   * Removes the given element from the Inputs array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromInputs(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the OutputArray array. This is achieved by marking the element for removal.
   */
  public void removeFromOutputArray(entity.LookupTableOutputColumn element);
  
  
  /**
   * Removes the given element from the OutputArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromOutputArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the EntityName field.
   */
  public void setEntityName(java.lang.String value);
  
  
  /**
   * Sets the value of the Existence field.
   */
  public void setExistence(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the Inputs field.
   */
  public void setInputs(entity.LookupTableInputColumn[] value);
  
  
  /**
   * Sets the value of the Output field.
   */
  public void setOutput(entity.LookupTableOutputColumn value);
  
  
  /**
   * Sets the value of the OutputArray field.
   */
  public void setOutputArray(entity.LookupTableOutputColumn[] value);
  
  
  public void setOutputID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.LookupTableDefinition value);
  
  
  /**
   * Sets the value of the TableCode field.
   */
  public void setTableCode(java.lang.String value);
  
  
  /**
   * Sets the value of the TableDesc field.
   */
  public void setTableDesc(java.lang.String value);
  
  
  /**
   * Sets the value of the TableName field.
   */
  public void setTableName(java.lang.String value);
  
  
  
}