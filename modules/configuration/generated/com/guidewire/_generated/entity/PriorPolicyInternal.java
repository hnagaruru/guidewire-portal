package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PriorPolicy.eti;PriorPolicy.eix;PriorPolicy.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface PriorPolicyInternal extends com.guidewire._generated.entity.EditableInternal, com.guidewire._generated.entity.SimpleEffDatedInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire._generated.entity.FrozenSetMemberInternal, com.guidewire.pc.domain.priorcarrier.PriorPolicyPublicMethods {
  /**
   * Gets the value of the AnnualPremium field.
   * Last year's annual premium
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getAnnualPremium();
  
  
  /**
   * Gets the value of the AnnualPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getAnnualPremium_amt();
  
  
  /**
   * Gets the value of the AnnualPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getAnnualPremium_cur();
  
  
  /**
   * Gets the value of the Carrier field.
   * Name of the carrier
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCarrier();
  
  
  /**
   * Gets the value of the ExpMod field.
   * The experience modifier for this prior policy
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getExpMod();
  
  
  /**
   * Gets the value of the NumLosses field.
   * Number of losses in the last 3 years
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumLosses();
  
  
  /**
   * Gets the value of the Policy field.
   * The policy to which this applies
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy();
  
  
  public gw.pl.persistence.core.Key getPolicyID();
  
  
  /**
   * Gets the value of the PolicyLinePatternCode field.
   * The applicable policy line for this coverage.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyLinePatternCode();
  
  
  /**
   * Gets the value of the PolicyNumber field.
   * Policy number
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyNumber();
  
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PriorPolicy getSubtype();
  
  
  /**
   * Gets the value of the TotalLosses field.
   * Total losses in the last 3 years
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalLosses();
  
  
  /**
   * Gets the value of the TotalLosses_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalLosses_amt();
  
  
  /**
   * Gets the value of the TotalLosses_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalLosses_cur();
  
  
  /**
   * Gets the value of the TotalPremium field.
   * The total premium for prior coverage
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalPremium();
  
  
  /**
   * Gets the value of the TotalPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalPremium_amt();
  
  
  /**
   * Gets the value of the TotalPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalPremium_cur();
  
  
  /**
   * Sets the value of the AnnualPremium field.
   */
  public void setAnnualPremium(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the AnnualPremium_amt field.
   */
  public void setAnnualPremium_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the AnnualPremium_cur field.
   */
  public void setAnnualPremium_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Carrier field.
   */
  public void setCarrier(java.lang.String value);
  
  
  /**
   * Sets the value of the ExpMod field.
   */
  public void setExpMod(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the NumLosses field.
   */
  public void setNumLosses(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Policy field.
   */
  public void setPolicy(entity.Policy value);
  
  
  public void setPolicyID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the PolicyLinePatternCode field.
   */
  public void setPolicyLinePatternCode(java.lang.String value);
  
  
  /**
   * Sets the value of the PolicyNumber field.
   */
  public void setPolicyNumber(java.lang.String value);
  
  
  /**
   * Sets the value of the Subtype field.
   */
  public void setSubtype(typekey.PriorPolicy value);
  
  
  /**
   * Sets the value of the TotalLosses field.
   */
  public void setTotalLosses(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalLosses_amt field.
   */
  public void setTotalLosses_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalLosses_cur field.
   */
  public void setTotalLosses_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the TotalPremium field.
   */
  public void setTotalPremium(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the TotalPremium_amt field.
   */
  public void setTotalPremium_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the TotalPremium_cur field.
   */
  public void setTotalPremium_cur(typekey.Currency value);
  
  
  
}