package com.guidewire._generated.entity;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Cost.eti;Cost.eix;Cost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
public interface CostInternal extends com.guidewire._generated.entity.EffDatedInternal, com.guidewire.pc.domain.financials.CostPublicMethods, com.guidewire.pc.domain.financials.impl.CostInternalMethods, gw.api.domain.financials.CostAdapter {
  /**
   * Gets the value of the ActualAdjRate field.
   * The adjusted rate (after mod factors are applied) for the cost over the rated term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getActualAdjRate();
  
  
  /**
   * Gets the value of the ActualAmount field.
   * The current amount for the effDated effective period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getActualAmount();
  
  
  /**
   * Gets the value of the ActualAmountBilling field.
   * The current amount converted to the settlement currency for the effDated effective period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getActualAmountBilling();
  
  
  /**
   * Gets the value of the ActualAmountBilling_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getActualAmountBilling_amt();
  
  
  /**
   * Gets the value of the ActualAmountBilling_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getActualAmountBilling_cur();
  
  
  /**
   * Gets the value of the ActualAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getActualAmount_amt();
  
  
  /**
   * Gets the value of the ActualAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getActualAmount_cur();
  
  
  /**
   * Gets the value of the ActualBaseRate field.
   * The base rate (before mod factors are applied) for the cost over the rated term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getActualBaseRate();
  
  
  /**
   * Gets the value of the ActualTermAmount field.
   * The cost over an rated term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getActualTermAmount();
  
  
  /**
   * Gets the value of the ActualTermAmountBilling field.
   * The cost converted to settlement currency over an rated term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getActualTermAmountBilling();
  
  
  /**
   * Gets the value of the ActualTermAmountBilling_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getActualTermAmountBilling_amt();
  
  
  /**
   * Gets the value of the ActualTermAmountBilling_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getActualTermAmountBilling_cur();
  
  
  /**
   * Gets the value of the ActualTermAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getActualTermAmount_amt();
  
  
  /**
   * Gets the value of the ActualTermAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getActualTermAmount_cur();
  
  
  /**
   * Gets the value of the Basis field.
   * The basis for the cost over the rated term.  The basis type itself may vary (e.g. units of risk, units of money, etc.)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getBasis();
  
  
  /**
   * Gets the value of the BillGroup field.
   * Custom grouping for costs itemised for billing but collected as one charge
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBillGroup();
  
  
  /**
   * Gets the value of the ChargeGroup field.
   * Custom group name to group charges together
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChargeGroup();
  
  
  /**
   * Gets the value of the ChargePattern field.
   * The type of charge (Premium, Taxes, Fee)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ChargePattern getChargePattern();
  
  
  /**
   * Gets the value of the CostCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CostCode getCostCode();
  
  
  public gw.pl.persistence.core.Key getCostCodeID();
  
  
  /**
   * Gets the value of the NumDaysInRatedTerm field.
   * The number of days in the term period used to arrive at the rate.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumDaysInRatedTerm();
  
  
  /**
   * Gets the value of the OverrideAdjRate field.
   * The user-specified override for the adjusted rate.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOverrideAdjRate();
  
  
  /**
   * Gets the value of the OverrideAmount field.
   * The user-specified override for the amount.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getOverrideAmount();
  
  
  /**
   * Gets the value of the OverrideAmountBilling field.
   * The user-specified override converted to settlement currency for the amount.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getOverrideAmountBilling();
  
  
  /**
   * Gets the value of the OverrideAmountBilling_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOverrideAmountBilling_amt();
  
  
  /**
   * Gets the value of the OverrideAmountBilling_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getOverrideAmountBilling_cur();
  
  
  /**
   * Gets the value of the OverrideAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOverrideAmount_amt();
  
  
  /**
   * Gets the value of the OverrideAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getOverrideAmount_cur();
  
  
  /**
   * Gets the value of the OverrideBaseRate field.
   * The user-specified override for the base rate.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOverrideBaseRate();
  
  
  /**
   * Gets the value of the OverrideReason field.
   * Why the override is being applied.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOverrideReason();
  
  
  /**
   * Gets the value of the OverrideSource field.
   * Source of override, or null if none
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.OverrideSourceType getOverrideSource();
  
  
  /**
   * Gets the value of the OverrideTermAmount field.
   * The user-specified override for the term amount.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getOverrideTermAmount();
  
  
  /**
   * Gets the value of the OverrideTermAmountBilling field.
   * The user-specified override converted to settlement currency for the term amount.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getOverrideTermAmountBilling();
  
  
  /**
   * Gets the value of the OverrideTermAmountBilling_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOverrideTermAmountBilling_amt();
  
  
  /**
   * Gets the value of the OverrideTermAmountBilling_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getOverrideTermAmountBilling_cur();
  
  
  /**
   * Gets the value of the OverrideTermAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOverrideTermAmount_amt();
  
  
  /**
   * Gets the value of the OverrideTermAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getOverrideTermAmount_cur();
  
  
  /**
   * Gets the value of the PolicyFXRate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyFXRate getPolicyFXRate();
  
  
  public gw.pl.persistence.core.Key getPolicyFXRateID();
  
  
  /**
   * Gets the value of the ProrationMethod field.
   * Procedure used to derive Amount from Term Amount, e.g. day-based pro-rata, or flat
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ProrationMethod getProrationMethod();
  
  
  /**
   * Gets the value of the RateAmountType field.
   * Tax/surcharge, a standard premium, or a non-standard premium
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateAmountType getRateAmountType();
  
  
  /**
   * Gets the value of the RateBook field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBook getRateBook();
  
  
  public gw.pl.persistence.core.Key getRateBookID();
  
  
  /**
   * Gets the value of the RoundingLevel field.
   * Number of decimal places to which this cost should be rounded when prorated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getRoundingLevel();
  
  
  /**
   * Gets the value of the RoundingMode field.
   * Rounding mode (e.g. HALF_UP) to be used when prorating
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RoundingModeType getRoundingMode();
  
  
  /**
   * Gets the value of the StandardAdjRate field.
   * The adjusted rate (after mod factors are applied) for the cost over the rated term, as calculated based on the standard base rate.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStandardAdjRate();
  
  
  /**
   * Gets the value of the StandardAmount field.
   * The current amount for the effDated effective period, as calculated based on the standard rates.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getStandardAmount();
  
  
  /**
   * Gets the value of the StandardAmountBilling field.
   * The current amount for the effDated effective period, as calculated based on the standard rates.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getStandardAmountBilling();
  
  
  /**
   * Gets the value of the StandardAmountBilling_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStandardAmountBilling_amt();
  
  
  /**
   * Gets the value of the StandardAmountBilling_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getStandardAmountBilling_cur();
  
  
  /**
   * Gets the value of the StandardAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStandardAmount_amt();
  
  
  /**
   * Gets the value of the StandardAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getStandardAmount_cur();
  
  
  /**
   * Gets the value of the StandardBaseRate field.
   * The standard base rate (before mod factors are applied) for the cost over the rated term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStandardBaseRate();
  
  
  /**
   * Gets the value of the StandardTermAmount field.
   * The cost over an rated term, as calculated based on the standard rates.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getStandardTermAmount();
  
  
  /**
   * Gets the value of the StandardTermAmountBilling field.
   * The cost over an rated term converted to settlement currency, as calculated based on the standard rates.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getStandardTermAmountBilling();
  
  
  /**
   * Gets the value of the StandardTermAmountBilling_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStandardTermAmountBilling_amt();
  
  
  /**
   * Gets the value of the StandardTermAmountBilling_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getStandardTermAmountBilling_cur();
  
  
  /**
   * Gets the value of the StandardTermAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStandardTermAmount_amt();
  
  
  /**
   * Gets the value of the StandardTermAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getStandardTermAmount_cur();
  
  
  /**
   * Gets the value of the FXRateConversionUsed field.
   * Flags when the PolicyFXRate is used to convert amounts from coverage currency to settlement currency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFXRateConversionUsed();
  
  
  /**
   * Gets the value of the Overridable field.
   * Indicates whether this cost can have an override applied; most likely set by the rating engine.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isOverridable();
  
  
  /**
   * Gets the value of the SubjectToReporting field.
   * Indicates whether this cost is subject to reporting.  If a cost is subject to reporting and a policy has a reporting plan, that cost will only generate charged transactions during report jobs and final audit.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSubjectToReporting();
  
  
  /**
   * Sets the value of the ActualAdjRate field.
   */
  public void setActualAdjRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ActualAmount field.
   */
  public void setActualAmount(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the ActualAmountBilling field.
   */
  public void setActualAmountBilling(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the ActualAmountBilling_amt field.
   */
  public void setActualAmountBilling_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ActualAmountBilling_cur field.
   */
  public void setActualAmountBilling_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the ActualAmount_amt field.
   */
  public void setActualAmount_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ActualAmount_cur field.
   */
  public void setActualAmount_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the ActualBaseRate field.
   */
  public void setActualBaseRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ActualTermAmount field.
   */
  public void setActualTermAmount(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the ActualTermAmountBilling field.
   */
  public void setActualTermAmountBilling(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the ActualTermAmountBilling_amt field.
   */
  public void setActualTermAmountBilling_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ActualTermAmountBilling_cur field.
   */
  public void setActualTermAmountBilling_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the ActualTermAmount_amt field.
   */
  public void setActualTermAmount_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the ActualTermAmount_cur field.
   */
  public void setActualTermAmount_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the Basis field.
   */
  public void setBasis(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the BillGroup field.
   */
  public void setBillGroup(java.lang.String value);
  
  
  /**
   * Sets the value of the ChargeGroup field.
   */
  public void setChargeGroup(java.lang.String value);
  
  
  /**
   * Sets the value of the ChargePattern field.
   */
  public void setChargePattern(typekey.ChargePattern value);
  
  
  /**
   * Sets the value of the CostCode field.
   */
  public void setCostCode(entity.CostCode value);
  
  
  public void setCostCodeID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the FXRateConversionUsed field.
   */
  public void setFXRateConversionUsed(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the NumDaysInRatedTerm field.
   */
  public void setNumDaysInRatedTerm(java.lang.Integer value);
  
  
  /**
   * Sets the value of the Overridable field.
   */
  public void setOverridable(java.lang.Boolean value);
  
  
  /**
   * Sets the value of the OverrideAdjRate field.
   */
  public void setOverrideAdjRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the OverrideAmount field.
   */
  public void setOverrideAmount(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the OverrideAmountBilling field.
   */
  public void setOverrideAmountBilling(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the OverrideAmountBilling_amt field.
   */
  public void setOverrideAmountBilling_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the OverrideAmountBilling_cur field.
   */
  public void setOverrideAmountBilling_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the OverrideAmount_amt field.
   */
  public void setOverrideAmount_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the OverrideAmount_cur field.
   */
  public void setOverrideAmount_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the OverrideBaseRate field.
   */
  public void setOverrideBaseRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the OverrideReason field.
   */
  public void setOverrideReason(java.lang.String value);
  
  
  /**
   * Sets the value of the OverrideSource field.
   */
  public void setOverrideSource(typekey.OverrideSourceType value);
  
  
  /**
   * Sets the value of the OverrideTermAmount field.
   */
  public void setOverrideTermAmount(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the OverrideTermAmountBilling field.
   */
  public void setOverrideTermAmountBilling(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the OverrideTermAmountBilling_amt field.
   */
  public void setOverrideTermAmountBilling_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the OverrideTermAmountBilling_cur field.
   */
  public void setOverrideTermAmountBilling_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the OverrideTermAmount_amt field.
   */
  public void setOverrideTermAmount_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the OverrideTermAmount_cur field.
   */
  public void setOverrideTermAmount_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the PolicyFXRate field.
   */
  public void setPolicyFXRate(entity.PolicyFXRate value);
  
  
  public void setPolicyFXRateID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the ProrationMethod field.
   */
  public void setProrationMethod(typekey.ProrationMethod value);
  
  
  /**
   * Sets the value of the RateAmountType field.
   */
  public void setRateAmountType(typekey.RateAmountType value);
  
  
  /**
   * Sets the value of the RateBook field.
   */
  public void setRateBook(entity.RateBook value);
  
  
  public void setRateBookID(gw.pl.persistence.core.Key value);
  
  
  /**
   * Sets the value of the RoundingLevel field.
   */
  public void setRoundingLevel(java.lang.Integer value);
  
  
  /**
   * Sets the value of the RoundingMode field.
   */
  public void setRoundingMode(typekey.RoundingModeType value);
  
  
  /**
   * Sets the value of the StandardAdjRate field.
   */
  public void setStandardAdjRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the StandardAmount field.
   */
  public void setStandardAmount(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the StandardAmountBilling field.
   */
  public void setStandardAmountBilling(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the StandardAmountBilling_amt field.
   */
  public void setStandardAmountBilling_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the StandardAmountBilling_cur field.
   */
  public void setStandardAmountBilling_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the StandardAmount_amt field.
   */
  public void setStandardAmount_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the StandardAmount_cur field.
   */
  public void setStandardAmount_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the StandardBaseRate field.
   */
  public void setStandardBaseRate(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the StandardTermAmount field.
   */
  public void setStandardTermAmount(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the StandardTermAmountBilling field.
   */
  public void setStandardTermAmountBilling(gw.pl.currency.MonetaryAmount value);
  
  
  /**
   * Sets the value of the StandardTermAmountBilling_amt field.
   */
  public void setStandardTermAmountBilling_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the StandardTermAmountBilling_cur field.
   */
  public void setStandardTermAmountBilling_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the StandardTermAmount_amt field.
   */
  public void setStandardTermAmount_amt(java.math.BigDecimal value);
  
  
  /**
   * Sets the value of the StandardTermAmount_cur field.
   */
  public void setStandardTermAmount_cur(typekey.Currency value);
  
  
  /**
   * Sets the value of the SubjectToReporting field.
   */
  public void setSubjectToReporting(java.lang.Boolean value);
  
  
  
}