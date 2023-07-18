package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RuleLookupRequestDef.eti;RuleLookupRequestDef.eix;RuleLookupRequestDef.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RuleLookupRequestDefInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.RuleVersionDependentInternal, gw.bizrules.domain.RuleVersionDependent {
  /**
   * Adds the given element to the LookupExpressionFragments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLookupExpressionFragments(entity.LookupExpressionFragment element);
  
  
  /**
   * Adds the given element to the ParametersDefinition array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToParametersDefinition(entity.RuleLookupParameterDef element);
  
  
  /**
   * Adds the given element to the ValueDefinitionArray array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToValueDefinitionArray(entity.RuleLookupValueDef element);
  
  
  /**
   * Gets the value of the Description field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the LookupExpressionFragments field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LookupExpressionFragment[] getLookupExpressionFragments();
  
  
  /**
   * Gets the value of the ParametersDefinition field.
   * Lookup's Input parameters
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RuleLookupParameterDef[] getParametersDefinition();
  
  
  /**
   * Gets the value of the TableID field.
   * Lookup Table Identifier 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableID();
  
  
  /**
   * Gets the value of the ValueDefinition field.
   * Holds the Lookup Table Value definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RuleLookupValueDef getValueDefinition();
  
  
  /**
   * Gets the value of the ValueDefinitionArray field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RuleLookupValueDef[] getValueDefinitionArray();
  
  
  public gw.pl.persistence.core.Key getValueDefinitionID();
  
  
  /**
   * Removes the given element from the LookupExpressionFragments array. This is achieved by marking the element for removal.
   */
  public void removeFromLookupExpressionFragments(entity.LookupExpressionFragment element);
  
  
  /**
   * Removes the given element from the LookupExpressionFragments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLookupExpressionFragments(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ParametersDefinition array. This is achieved by marking the element for removal.
   */
  public void removeFromParametersDefinition(entity.RuleLookupParameterDef element);
  
  
  /**
   * Removes the given element from the ParametersDefinition array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromParametersDefinition(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Removes the given element from the ValueDefinitionArray array. This is achieved by marking the element for removal.
   */
  public void removeFromValueDefinitionArray(entity.RuleLookupValueDef element);
  
  
  /**
   * Removes the given element from the ValueDefinitionArray array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromValueDefinitionArray(gw.pl.persistence.core.Key elementID);
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the LookupExpressionFragments field.
   */
  public void setLookupExpressionFragments(entity.LookupExpressionFragment[] value);
  
  
  /**
   * Sets the value of the ParametersDefinition field.
   */
  public void setParametersDefinition(entity.RuleLookupParameterDef[] value);
  
  
  /**
   * Sets the value of the TableID field.
   */
  public void setTableID(java.lang.String value);
  
  
  /**
   * Sets the value of the ValueDefinition field.
   */
  public void setValueDefinition(entity.RuleLookupValueDef value);
  
  
  /**
   * Sets the value of the ValueDefinitionArray field.
   */
  public void setValueDefinitionArray(entity.RuleLookupValueDef[] value);
  
  
  public void setValueDefinitionID(gw.pl.persistence.core.Key value);
  
  
  
}