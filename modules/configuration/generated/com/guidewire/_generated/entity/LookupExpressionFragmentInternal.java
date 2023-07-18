package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "LookupExpressionFragment.eti;LookupExpressionFragment.eix;LookupExpressionFragment.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface LookupExpressionFragmentInternal extends com.guidewire._generated.entity.ConditionExpressionFragmentInternal, com.guidewire.bizrules.codegenerator.GosuTextBuilder<entity.KeyableBean>, com.guidewire.bizrules.codegenerator.LookupExpressionFragmentValidationMethods, com.guidewire.bizrules.domain.ExpressionFragmentDomainMethods {
  /**
   * Gets the value of the LookupExpression field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLookupExpression();
  
  
  /**
   * Gets the value of the RuleLookupRequestDef field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RuleLookupRequestDef getRuleLookupRequestDef();
  
  
  public gw.pl.persistence.core.Key getRuleLookupRequestDefID();
  
  
  /**
   * Sets the value of the LookupExpression field.
   */
  public void setLookupExpression(java.lang.String value);
  
  
  /**
   * Sets the value of the RuleLookupRequestDef field.
   */
  public void setRuleLookupRequestDef(entity.RuleLookupRequestDef value);
  
  
  public void setRuleLookupRequestDefID(gw.pl.persistence.core.Key value);
  
  
  
}