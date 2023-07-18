package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateTableColumn.eti;RateTableColumn.eix;RateTableColumn.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateTableColumnInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the ColumnLabel_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToColumnLabel_L10N_ARRAY(entity.RateTableColumn_ColumnLabel_L10N element);
  
  
  /**
   * Adds the given element to the RtcoledgeArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToRtcoledgeArray(entity.Rtcoledge element);
  
  
  /**
   * Gets the value of the ColumnLabel field.
   * The label of a column to be displayed in the UI
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getColumnLabel();
  
  
  /**
   * Gets the value of the ColumnLabel_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableColumn_ColumnLabel_L10N[] getColumnLabel_L10N_ARRAY();
  
  
  /**
   * Array association for partition ColumnLabel_L10N_ARRAYByLanguage on array ColumnLabel_L10N_ARRAY
   */
  public entity.RateTableColumn_ColumnLabel_L10N getColumnLabel_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the ColumnName field.
   * The name of a column in a rate table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getColumnName();
  
  
  /**
   * Gets the value of the ColumnScale field.
   * The scale to use for this column.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getColumnScale();
  
  
  /**
   * Gets the value of the ColumnType field.
   * The data type of this column
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateTableDataType getColumnType();
  
  
  /**
   * Gets the value of the DefinitionForFactor field.
   * Rate table definition for a factor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableDefinition getDefinitionForFactor();
  
  
  public gw.pl.persistence.core.Key getDefinitionForFactorID();
  
  
  /**
   * Gets the value of the DefinitionForParam field.
   * Rate table definition for a parameter
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableDefinition getDefinitionForParam();
  
  
  public gw.pl.persistence.core.Key getDefinitionForParamID();
  
  
  /**
   * Gets the value of the DependsOn field.
   * Defines parameter dependency.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableColumn getDependsOn();
  
  
  public gw.pl.persistence.core.Key getDependsOnID();
  
  
  /**
   * Gets the value of the DisplayType field.
   * How this column should be displayed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateTableColumnDisplay getDisplayType();
  
  
  /**
   * Gets the value of the MatchOp field.
   * Match operation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableMatchOp getMatchOp();
  
  
  public gw.pl.persistence.core.Key getMatchOpID();
  
  
  /**
   * Gets the value of the PhysicalColumnName field.
   * The name of the physical table column to which this column is mapped.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPhysicalColumnName();
  
  
  /**
   * Gets the value of the RtcoledgeArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Rtcoledge[] getRtcoledgeArray();
  
  
  /**
   * Gets the value of the SortOrder field.
   * Sort order of the column
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSortOrder();
  
  
  /**
   * Gets the value of the ValueProvider field.
   * Fully qualified name of the class implementing value provider interface
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getValueProvider();
  
  
  /**
   * Gets the value of the MultiSelect field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isMultiSelect();
  
  
  /**
   * Removes the given element from the ColumnLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromColumnLabel_L10N_ARRAY(entity.RateTableColumn_ColumnLabel_L10N element);
  
  
  /**
   * Removes the given element from the ColumnLabel_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromColumnLabel_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the RtcoledgeArray array. This is achieved by marking the element for removal.
   */
  public void removeFromRtcoledgeArray(entity.Rtcoledge element);
  
  
  /**
   * Removes the given element from the RtcoledgeArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromRtcoledgeArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ColumnLabel field.
   */
  public void setColumnLabel(java.lang.String value);
  
  
  /**
   * Sets the value of the ColumnLabel_L10N_ARRAY field.
   */
  public void setColumnLabel_L10N_ARRAY(entity.RateTableColumn_ColumnLabel_L10N[] value);
  
  
  /**
   * Sets the value of the ColumnName field.
   */
  public void setColumnName(java.lang.String value);
  
  
  /**
   * Sets the value of the ColumnScale field.
   */
  public void setColumnScale(java.lang.Integer value);
  
  
  /**
   * Sets the value of the ColumnType field.
   */
  public void setColumnType(typekey.RateTableDataType value);
  
  
  /**
   * Sets the value of the DefinitionForFactor field.
   */
  public void setDefinitionForFactor(entity.RateTableDefinition value);
  
  
  public void setDefinitionForFactorID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DefinitionForParam field.
   */
  public void setDefinitionForParam(entity.RateTableDefinition value);
  
  
  public void setDefinitionForParamID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DependsOn field.
   */
  public void setDependsOn(entity.RateTableColumn value);
  
  
  public void setDependsOnID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the DisplayType field.
   */
  public void setDisplayType(typekey.RateTableColumnDisplay value);
  
  
  /**
   * Sets the value of the MatchOp field.
   */
  public void setMatchOp(entity.RateTableMatchOp value);
  
  
  public void setMatchOpID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the MultiSelect field.
   */
  public void setMultiSelect(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the PhysicalColumnName field.
   */
  public void setPhysicalColumnName(java.lang.String value);
  
  
  /**
   * Sets the value of the RtcoledgeArray field.
   */
  public void setRtcoledgeArray(entity.Rtcoledge[] value);
  
  
  /**
   * Sets the value of the SortOrder field.
   */
  public void setSortOrder(java.lang.Integer value);
  
  
  /**
   * Sets the value of the ValueProvider field.
   */
  public void setValueProvider(java.lang.String value);
  
  
  
}