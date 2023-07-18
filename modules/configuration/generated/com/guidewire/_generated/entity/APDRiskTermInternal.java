package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskTerm.eti;APDRiskTerm.eix;APDRiskTerm.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface APDRiskTermInternal extends com.guidewire._generated.entity.APDDataFieldInternal {
  /**
   * Gets the value of the RiskClause field.
   * The clause that this field qualifies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.APDRiskClause getRiskClause();
  
  
  public gw.pl.persistence.core.Key getRiskClauseID();
  
  
  /**
   * Sets the value of the RiskClause field.
   */
  public void setRiskClause(entity.APDRiskClause value);
  
  
  public void setRiskClauseID(gw.pl.persistence.core.Key value);
  
  
  
}