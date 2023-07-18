package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RICededPremiumTransaction.eti;RICededPremiumTransaction.eix;RICededPremiumTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface RICededPremiumTransactionInternal extends com.guidewire._generated.entity.SimpleEffDatedInternal, com.guidewire._generated.entity.ExtractableInternal, com.guidewire.pc.domain.reinsurance.RICededPremiumTransactionPublicMethods, gw.api.reinsurance.RICededPremiumTxnAdapter {
  /**
   * Gets the value of the Agreement field.
   * The agreement being ceded to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIAgreement getAgreement();
  
  
  public gw.pl.persistence.core.Key getAgreementID();
  
  
  /**
   * Gets the value of the BasisGNP field.
   * The Gross Net Premium that was used for the purposes of this calculation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getBasisGNP();
  
  
  /**
   * Gets the value of the BasisGNP_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getBasisGNP_amt();
  
  
  /**
   * Gets the value of the BasisGNP_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getBasisGNP_cur();
  
  
  /**
   * Gets the value of the CalcTimestamp field.
   * The date and time on which ceding calculation was done.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCalcTimestamp();
  
  
  /**
   * Gets the value of the CalculationOrder field.
   * The order of calculation, essentially for documentation purposes.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getCalculationOrder();
  
  
  /**
   * Gets the value of the CededPremium field.
   * The amount of premium to cede to the agreement for effective time [EffDate, ExpDate). This value can be negative, as in the case of an offset (certainly) but also in some cases where so much was ceded to prior treaties that what is left is a negative amount.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getCededPremium();
  
  
  /**
   * Gets the value of the CededPremiumMarkup field.
   * The amount of markup to the agreement for effective time [EffDate, ExpDate). This value can be negative, for the same reasons that CededPremium can be. Normally their signs will match, and the net owed to the reinsurer is CededPremium - Commission.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getCededPremiumMarkup();
  
  
  /**
   * Gets the value of the CededPremiumMarkup_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCededPremiumMarkup_amt();
  
  
  /**
   * Gets the value of the CededPremiumMarkup_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCededPremiumMarkup_cur();
  
  
  /**
   * Gets the value of the CededPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCededPremium_amt();
  
  
  /**
   * Gets the value of the CededPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCededPremium_cur();
  
  
  /**
   * Gets the value of the CededRiskAmount field.
   * The amount of risk ceded to the agreement.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getCededRiskAmount();
  
  
  /**
   * Gets the value of the CededRiskAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCededRiskAmount_amt();
  
  
  /**
   * Gets the value of the CededRiskAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCededRiskAmount_cur();
  
  
  /**
   * Gets the value of the CedingRate field.
   * The ceding rate used for the calculation. The source of this value depends on the type of agreement. For a proportional agreement, this is the proportion of risk ceded to the agreement; for a non-proportional agreement it is the specified ceding rate. 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCedingRate();
  
  
  /**
   * Gets the value of the Commission field.
   * The amount of commission earned from the agreement for effective time [EffDate,ExpDate). This value can be negative, for the same reasons that CededPremium can be. Normally their signs will match, and the net owed to the reinsurer is CededPremium - Commission.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getCommission();
  
  
  /**
   * Gets the value of the CommissionRate field.
   * The rate used for the calculation of commission, denormalized from the agreement at the time this transaction was created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCommissionRate();
  
  
  /**
   * Gets the value of the Commission_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCommission_amt();
  
  
  /**
   * Gets the value of the Commission_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCommission_cur();
  
  
  /**
   * Gets the value of the DatePosted field.
   * The date the transaction was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDatePosted();
  
  
  /**
   * Gets the value of the DateWritten field.
   * The date the ceding should be recognized for financial purposes.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateWritten();
  
  
  /**
   * Gets the value of the MarkupRate field.
   * The rate used for the calculation of markup, denormalized from the (Fac) agreement at the time this transaction was created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getMarkupRate();
  
  
  /**
   * Gets the value of the PolicyFXRate field.
   * The policy foreign exchange rate used to convert the ceded premium to the settlement currency.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyFXRate getPolicyFXRate();
  
  
  public gw.pl.persistence.core.Key getPolicyFXRateID();
  
  
  /**
   * Gets the value of the Program field.
   * The reinsurance program that applies to this premium
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIProgram getProgram();
  
  
  public gw.pl.persistence.core.Key getProgramID();
  
  
  /**
   * Sets the value of the Agreement field.
   */
  public void setAgreement(entity.RIAgreement value);
  
  
  public void setAgreementID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the BasisGNP field.
   */
  public void setBasisGNP(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the BasisGNP_amt field.
   */
  public void setBasisGNP_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the BasisGNP_cur field.
   */
  public void setBasisGNP_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the CalcTimestamp field.
   */
  public void setCalcTimestamp(java.util.Date value);
  
  
  /**
   * Sets the value of the CalculationOrder field.
   */
  public void setCalculationOrder(java.lang.Integer value);
  
  
  /**
   * Sets the value of the CededPremium field.
   */
  public void setCededPremium(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the CededPremiumMarkup field.
   */
  public void setCededPremiumMarkup(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the CededPremiumMarkup_amt field.
   */
  public void setCededPremiumMarkup_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the CededPremiumMarkup_cur field.
   */
  public void setCededPremiumMarkup_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the CededPremium_amt field.
   */
  public void setCededPremium_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the CededPremium_cur field.
   */
  public void setCededPremium_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the CededRiskAmount field.
   */
  public void setCededRiskAmount(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the CededRiskAmount_amt field.
   */
  public void setCededRiskAmount_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the CededRiskAmount_cur field.
   */
  public void setCededRiskAmount_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the CedingRate field.
   */
  public void setCedingRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Commission field.
   */
  public void setCommission(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the CommissionRate field.
   */
  public void setCommissionRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Commission_amt field.
   */
  public void setCommission_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the Commission_cur field.
   */
  public void setCommission_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the DatePosted field.
   */
  public void setDatePosted(java.util.Date value);
  
  
  /**
   * Sets the value of the DateWritten field.
   */
  public void setDateWritten(java.util.Date value);
  
  
  /**
   * Sets the value of the MarkupRate field.
   */
  public void setMarkupRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the PolicyFXRate field.
   */
  public void setPolicyFXRate(entity.PolicyFXRate value);
  
  
  public void setPolicyFXRateID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the Program field.
   */
  public void setProgram(entity.RIProgram value);
  
  
  public void setProgramID(gw.pl.persistence.core.Key value);
  
  
  
}