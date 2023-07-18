package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDClauseRule.eti;APDClauseRule.eix;APDClauseRule.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDClauseRuleInternal extends com.guidewire._generated.entity.APDRuleInternal {
  /**
   * Gets the value of the Clause field.
   * The clause to which this rule applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDClause getClause();
  
  
  public gw.pl.persistence.core.Key getClauseID();
  
  
  /**
   * Sets the value of the Clause field.
   */
  public void setClause(entity.APDClause value);
  
  
  public void setClauseID(gw.pl.persistence.core.Key value);
  
  
  
}