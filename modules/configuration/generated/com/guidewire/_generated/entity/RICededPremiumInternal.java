package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RICededPremium.eti;RICededPremium.eix;RICededPremium.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RICededPremiumInternal extends com.guidewire._generated.entity.SimpleEffDatedInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire.pc.domain.reinsurance.RICededPremiumPublicMethods, gw.api.reinsurance.RICededPremiumAdapter {
  /**
   * Gets the value of the PolicyTerm field.
   * The policy term to which this ceding applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTerm getPolicyTerm();
  
  
  public gw.pl.persistence.core.Key getPolicyTermID();
  
  
  /**
   * Gets the value of the RiskDate field.
   * Effective date of the associated risk
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getRiskDate();
  
  
  /**
   * Gets the value of the RiskNumber field.
   * Risk number, copied from the Reinsurable
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRiskNumber();
  
  
  /**
   * Sets the value of the PolicyTerm field.
   */
  public void setPolicyTerm(entity.PolicyTerm value);
  
  
  public void setPolicyTermID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RiskDate field.
   */
  public void setRiskDate(java.util.Date value);
  
  
  /**
   * Sets the value of the RiskNumber field.
   */
  public void setRiskNumber(java.lang.String value);
  
  
  
}