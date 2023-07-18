package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateTableMatchOpDefinition.eti;RateTableMatchOpDefinition.eix;RateTableMatchOpDefinition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RateTableMatchOpDefinitionInternal extends com.guidewire._generated.entity.RetireableInternal {
  /**
   * Adds the given element to the MatchOps array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToMatchOps(entity.RateTableMatchOp element);
  
  
  /**
   * Adds the given element to the OpDesc_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToOpDesc_L10N_ARRAY(entity.RateTableMatchOpDefinition_OpDesc_L10N element);
  
  
  /**
   * Adds the given element to the OpName_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToOpName_L10N_ARRAY(entity.RateTableMatchOpDefinition_OpName_L10N element);
  
  
  /**
   * Gets the value of the AllowedParameterTypes field.
   * Parameter for this Match Operation allowed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAllowedParameterTypes();
  
  
  /**
   * Gets the value of the ImplClass field.
   * Fully qualified name of the class implementing this match operation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getImplClass();
  
  
  /**
   * Gets the value of the MatchOps field.
   * The list of match operations using this match operation definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableMatchOp[] getMatchOps();
  
  
  /**
   * Gets the value of the NumberOfParameters field.
   * Numbers of parameters allowed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumberOfParameters();
  
  
  /**
   * Gets the value of the OpCode field.
   * Match operation code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOpCode();
  
  
  /**
   * Gets the value of the OpDesc field.
   * Description of the Match operation applied to a rate table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOpDesc();
  
  
  /**
   * Gets the value of the OpDesc_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableMatchOpDefinition_OpDesc_L10N[] getOpDesc_L10N_ARRAY();
  
  
  /**
   * Array association for partition OpDesc_L10N_ARRAYByLanguage on array OpDesc_L10N_ARRAY
   */
  public entity.RateTableMatchOpDefinition_OpDesc_L10N getOpDesc_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the OpName field.
   * Name of the Match operation applied to a rate table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOpName();
  
  
  /**
   * Gets the value of the OpName_L10N_ARRAY field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableMatchOpDefinition_OpName_L10N[] getOpName_L10N_ARRAY();
  
  
  /**
   * Array association for partition OpName_L10N_ARRAYByLanguage on array OpName_L10N_ARRAY
   */
  public entity.RateTableMatchOpDefinition_OpName_L10N getOpName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property);
  
  
  /**
   * Gets the value of the SortOrder field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSortOrder();
  
  
  /**
   * Gets the value of the Deprecated field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDeprecated();
  
  
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
   * Removes the given element from the OpDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromOpDesc_L10N_ARRAY(entity.RateTableMatchOpDefinition_OpDesc_L10N element);
  
  
  /**
   * Removes the given element from the OpDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromOpDesc_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the OpName_L10N_ARRAY array. This is achieved by marking the element for removal.
   */
  public void removeFromOpName_L10N_ARRAY(entity.RateTableMatchOpDefinition_OpName_L10N element);
  
  
  /**
   * Removes the given element from the OpName_L10N_ARRAY array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromOpName_L10N_ARRAY(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the AllowedParameterTypes field.
   */
  public void setAllowedParameterTypes(java.lang.String value);
  
  
  /**
   * Sets the value of the Deprecated field.
   */
  public void setDeprecated(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the ImplClass field.
   */
  public void setImplClass(java.lang.String value);
  
  
  /**
   * Sets the value of the MatchOps field.
   */
  public void setMatchOps(entity.RateTableMatchOp[] value);
  
  
  /**
   * Sets the value of the NumberOfParameters field.
   */
  public void setNumberOfParameters(java.lang.Integer value);
  
  
  /**
   * Sets the value of the OpCode field.
   */
  public void setOpCode(java.lang.String value);
  
  
  /**
   * Sets the value of the OpDesc field.
   */
  public void setOpDesc(java.lang.String value);
  
  
  /**
   * Sets the value of the OpDesc_L10N_ARRAY field.
   */
  public void setOpDesc_L10N_ARRAY(entity.RateTableMatchOpDefinition_OpDesc_L10N[] value);
  
  
  /**
   * Sets the value of the OpName field.
   */
  public void setOpName(java.lang.String value);
  
  
  /**
   * Sets the value of the OpName_L10N_ARRAY field.
   */
  public void setOpName_L10N_ARRAY(entity.RateTableMatchOpDefinition_OpName_L10N[] value);
  
  
  /**
   * Sets the value of the SortOrder field.
   */
  public void setSortOrder(java.lang.Integer value);
  
  
  
}