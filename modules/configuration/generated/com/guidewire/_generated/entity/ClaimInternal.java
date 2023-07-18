package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Claim.eti;Claim.eix;Claim.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface ClaimInternal extends com.guidewire._generated.entity.VersionableInternal {
  /**
   * Gets the value of the AdjusterDisplayName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAdjusterDisplayName();
  
  
  /**
   * Gets the value of the AdjusterPhoneNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAdjusterPhoneNumber();
  
  
  /**
   * Gets the value of the ClaimNumber field.
   * Claim number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClaimNumber();
  
  
  /**
   * Gets the value of the ClaimPublicID field.
   * Claim Public ID
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClaimPublicID();
  
  
  /**
   * Gets the value of the ClaimSecurityType field.
   * Claim security type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getClaimSecurityType();
  
  
  /**
   * Gets the value of the ClaimSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ClaimSet getClaimSet();
  
  
  public gw.pl.persistence.core.Key getClaimSetID();
  
  
  /**
   * Gets the value of the LossDate field.
   * Loss date
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLossDate();
  
  
  /**
   * Gets the value of the LossType field.
   * Loss type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getLossType();
  
  
  /**
   * Gets the value of the PolicyPeriod field.
   * Associated Policy Period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod();
  
  
  public gw.pl.persistence.core.Key getPolicyPeriodID();
  
  
  /**
   * Gets the value of the PolicyType field.
   * Policy type
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyType();
  
  
  /**
   * Gets the value of the Status field.
   * Status
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getStatus();
  
  
  /**
   * Gets the value of the TotalIncurred field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalIncurred();
  
  
  /**
   * Gets the value of the TotalIncurred_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalIncurred_amt();
  
  
  /**
   * Gets the value of the TotalIncurred_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalIncurred_cur();
  
  
  /**
   * Gets the value of the FraudIndicator field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFraudIndicator();
  
  
  /**
   * Gets the value of the LargeLossIndicator field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLargeLossIndicator();
  
  
  /**
   * Gets the value of the LitigationIndicator field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isLitigationIndicator();
  
  
  /**
   * Gets the value of the PolicyInForce field.
   * Policy In Force
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isPolicyInForce();
  
  
  /**
   * Sets the value of the AdjusterDisplayName field.
   */
  public void setAdjusterDisplayName(java.lang.String value);
  
  
  /**
   * Sets the value of the AdjusterPhoneNumber field.
   */
  public void setAdjusterPhoneNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the ClaimNumber field.
   */
  public void setClaimNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the ClaimPublicID field.
   */
  public void setClaimPublicID(java.lang.String value);
  
  
  /**
   * Sets the value of the ClaimSecurityType field.
   */
  public void setClaimSecurityType(java.lang.String value);
  
  
  /**
   * Sets the value of the ClaimSet field.
   */
  public void setClaimSet(entity.ClaimSet value);
  
  
  public void setClaimSetID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the FraudIndicator field.
   */
  public void setFraudIndicator(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LargeLossIndicator field.
   */
  public void setLargeLossIndicator(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LitigationIndicator field.
   */
  public void setLitigationIndicator(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the LossDate field.
   */
  public void setLossDate(java.util.Date value);
  
  
  /**
   * Sets the value of the LossType field.
   */
  public void setLossType(java.lang.String value);
  
  
  /**
   * Sets the value of the PolicyInForce field.
   */
  public void setPolicyInForce(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value);
  
  
  public void setPolicyPeriodID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyType field.
   */
  public void setPolicyType(java.lang.String value);
  
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(java.lang.String value);
  
  
  /**
   * Sets the value of the TotalIncurred field.
   */
  public void setTotalIncurred(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalIncurred_amt field.
   */
  public void setTotalIncurred_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalIncurred_cur field.
   */
  public void setTotalIncurred_cur(typekey.Currency value);
  
  
  
}