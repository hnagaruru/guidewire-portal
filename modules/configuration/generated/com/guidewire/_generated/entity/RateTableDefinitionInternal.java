package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateTableDefinition.eti;RateTableDefinition.eix;RateTableDefinition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateTableDefinitionInternal extends com.guidewire._generated.entity.RetireableInternal, com.guidewire.pc.domain.rating.RateTableDefinitionPublicMethods {
  /**
   * Adds the given element to the ArgumentSourceSets array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToArgumentSourceSets(entity.RateTableArgumentSourceSet element);
  
  
  /**
   * Adds the given element to the Factors array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToFactors(entity.RateTableColumn element);
  
  
  /**
   * Adds the given element to the MatchOps array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToMatchOps(entity.RateTableMatchOp element);
  
  
  /**
   * Adds the given element to the TableDesc_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTableDesc_L10N_ARRAY(entity.RateTableDefinition_TableDesc_L10N element);
  
  
  /**
   * Adds the given element to the TableName_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToTableName_L10N_ARRAY(entity.RateTableDefinition_TableName_L10N element);
  
  
  /**
   * Gets the value of the ArgumentSourceSets field.
   * The Parameter Sets for this Table.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableArgumentSourceSet[] getArgumentSourceSets();
  
  
  /**
   * Gets the value of the EntityName field.
   * Name of the physical table that will hold the data for this table.        This may be empty when using the generic physical table rather than a custom one,      although this field can optionally contain the generic physical table's name when using it.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getEntityName();
  
  
  /**
   * Gets the value of the Factors field.
   * The list of factor definitions for this table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableColumn[] getFactors();
  
  
  /**
   * Gets the value of the MatchOps field.
   * The list of matching operations for this rate table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableMatchOp[] getMatchOps();
  
  
  /**
   * Gets the value of the PolicyLine field.
   * Code of the Policy Line that the rate table belongs to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyLine();
  
  
  /**
   * Gets the value of the TableCode field.
   * The rate table code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableCode();
  
  
  /**
   * Gets the value of the TableDesc field.
   * Description of the rate data that is stored by this table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableDesc();
  
  
  /**
   * Gets the value of the TableDesc_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableDefinition_TableDesc_L10N[] getTableDesc_L10N_ARRAY();
  
  
  /**
   * Array association for partition TableDesc_L10N_ARRAYByLanguage on array TableDesc_L10N_ARRAY
   */
  public entity.RateTableDefinition_TableDesc_L10N getTableDesc_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the TableName field.
   * The logical name of the rate table. Note: The rating data is stored in a separate physical table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableName();
  
  
  /**
   * Gets the value of the TableName_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableDefinition_TableName_L10N[] getTableName_L10N_ARRAY();
  
  
  /**
   * Array association for partition TableName_L10N_ARRAYByLanguage on array TableName_L10N_ARRAY
   */
  public entity.RateTableDefinition_TableName_L10N getTableName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Removes the given element from the ArgumentSourceSets array. This is achieved by marking the element for removal.
   */
  public void removeFromArgumentSourceSets(entity.RateTableArgumentSourceSet element);
  
  
  /**
   * Removes the given element from the ArgumentSourceSets array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromArgumentSourceSets(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the Factors array. This is achieved by marking the element for removal.
   */
  public void removeFromFactors(entity.RateTableColumn element);
  
  
  /**
   * Removes the given element from the Factors array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromFactors(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the MatchOps array. This is achieved by marking the element for removal.
   */
  public void removeFromMatchOps(entity.RateTableMatchOp element);
  
  
  /**
   * Removes the given element from the MatchOps array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromMatchOps(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the TableDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromTableDesc_L10N_ARRAY(entity.RateTableDefinition_TableDesc_L10N element);
  
  
  /**
   * Removes the given element from the TableDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTableDesc_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the TableName_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromTableName_L10N_ARRAY(entity.RateTableDefinition_TableName_L10N element);
  
  
  /**
   * Removes the given element from the TableName_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTableName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the ArgumentSourceSets field.
   */
  public void setArgumentSourceSets(entity.RateTableArgumentSourceSet[] value);
  
  
  /**
   * Sets the value of the EntityName field.
   */
  public void setEntityName(java.lang.String value);
  
  
  /**
   * Sets the value of the Factors field.
   */
  public void setFactors(entity.RateTableColumn[] value);
  
  
  /**
   * Sets the value of the MatchOps field.
   */
  public void setMatchOps(entity.RateTableMatchOp[] value);
  
  
  /**
   * Sets the value of the PolicyLine field.
   */
  public void setPolicyLine(java.lang.String value);
  
  
  /**
   * Sets the value of the TableCode field.
   */
  public void setTableCode(java.lang.String value);
  
  
  /**
   * Sets the value of the TableDesc field.
   */
  public void setTableDesc(java.lang.String value);
  
  
  /**
   * Sets the value of the TableDesc_L10N_ARRAY field.
   */
  public void setTableDesc_L10N_ARRAY(entity.RateTableDefinition_TableDesc_L10N[] value);
  
  
  /**
   * Sets the value of the TableName field.
   */
  public void setTableName(java.lang.String value);
  
  
  /**
   * Sets the value of the TableName_L10N_ARRAY field.
   */
  public void setTableName_L10N_ARRAY(entity.RateTableDefinition_TableName_L10N[] value);
  
  
  
}