package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LookupTableColumn.eti;LookupTableColumn.eix;LookupTableColumn.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LookupTableColumnInternal extends com.guidewire._generated.entity.EditableInternal {
  /**
   * Gets the value of the ColumnLabel field.
   * The label of a column to be displayed in the UI
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getColumnLabel();
  
  
  /**
   * Gets the value of the ColumnName field.
   * The name of a column in a lookup table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getColumnName();
  
  
  /**
   * Gets the value of the DataType field.
   * string value of IType
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDataType();
  
  
  /**
   * Gets the value of the Definition field.
   * Lookup table definition for a parameter
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LookupTableDefinition getDefinition();
  
  
  public gw.pl.persistence.core.Key getDefinitionID();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.LookupTableColumn getSubtype();
  
  
  /**
   * Sets the value of the ColumnLabel field.
   */
  public void setColumnLabel(java.lang.String value);
  
  
  /**
   * Sets the value of the ColumnName field.
   */
  public void setColumnName(java.lang.String value);
  
  
  /**
   * Sets the value of the DataType field.
   */
  public void setDataType(java.lang.String value);
  
  
  /**
   * Sets the value of the Definition field.
   */
  public void setDefinition(entity.LookupTableDefinition value);
  
  
  public void setDefinitionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.LookupTableColumn value);
  
  
  
}