package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RuleVariable.eti;RuleVariable.eix;RuleVariable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RuleVariableInternal extends com.guidewire._generated.entity.VersionableInternal, com.guidewire._generated.entity.RuleVersionDependentInternal, com.guidewire._generated.entity.OrderedChildInternal, com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>, com.guidewire.bizrules.codegenerator.RuleVariableValidationMethods, com.guidewire.bizrules.domain.RuleVariableDomainMethods, com.guidewire.bizrules.domain.RulesCascadingRemovable, gw.bizrules.domain.RuleVersionDependent {
  /**
   * Gets the value of the Description field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription();
  
  
  /**
   * Gets the value of the Expression field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ExpressionFragment getExpression();
  
  
  public gw.pl.persistence.core.Key getExpressionID();
  
  
  /**
   * Gets the value of the Name field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName();
  
  
  /**
   * Gets the value of the Rule field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Rule getRule();
  
  
  public gw.pl.persistence.core.Key getRuleID();
  
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value);
  
  
  /**
   * Sets the value of the Expression field.
   */
  public void setExpression(entity.ExpressionFragment value);
  
  
  public void setExpressionID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value);
  
  
  /**
   * Sets the value of the Rule field.
   */
  public void setRule(entity.Rule value);
  
  
  public void setRuleID(gw.pl.persistence.core.Key value);
  
  
  
}