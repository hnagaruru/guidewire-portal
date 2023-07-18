package entity;

/**
 * RICededPremiumTransaction
 * 
 *       A delegate for RICededPremiumTransaction, which is an individual ceding calculation done between a direct premium
 *       Transaction which insures an RIRisk, and a RIAgreement which reinsures that RIRisk.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RICededPremiumTransaction.eti;RICededPremiumTransaction.eix;RICededPremiumTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface RICededPremiumTransaction extends entity.SimpleEffDated, entity.Extractable, gw.api.reinsurance.RICededPremiumTxnAdapter {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RICededPremiumTransaction> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RICededPremiumTransaction>("entity.RICededPremiumTransaction");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> AGREEMENT_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("Agreement", "Agreement");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> BASISGNP_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("BasisGNP", "BasisGNP");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BASISGNP_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("BasisGNP_amt", "BasisGNP");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> BASISGNP_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("BasisGNP_cur", "BasisGNP_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CALCTIMESTAMP_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("CalcTimestamp", "CalcTimestamp");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CALCULATIONORDER_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("CalculationOrder", "CalculationOrder");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> CEDEDPREMIUM_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("CededPremium", "CededPremium");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> CEDEDPREMIUMMARKUP_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("CededPremiumMarkup", "CededPremiumMarkup");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEDPREMIUMMARKUP_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("CededPremiumMarkup_amt", "CededPremiumMarkup");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CEDEDPREMIUMMARKUP_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("CededPremiumMarkup_cur", "CededPremiumMarkup_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEDPREMIUM_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("CededPremium_amt", "CededPremium");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CEDEDPREMIUM_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("CededPremium_cur", "CededPremium_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> CEDEDRISKAMOUNT_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("CededRiskAmount", "CededRiskAmount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEDRISKAMOUNT_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("CededRiskAmount_amt", "CededRiskAmount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CEDEDRISKAMOUNT_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("CededRiskAmount_cur", "CededRiskAmount_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDINGRATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("CedingRate", "CedingRate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> COMMISSION_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("Commission", "Commission");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMMISSIONRATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("CommissionRate", "CommissionRate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMMISSION_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Commission_amt", "Commission");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> COMMISSION_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("Commission_cur", "Commission_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEPOSTED_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DatePosted", "DatePosted");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEWRITTEN_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("DateWritten", "DateWritten");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MARKUPRATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("MarkupRate", "MarkupRate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYFXRATE_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("PolicyFXRate", "PolicyFXRate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PROGRAM_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("Program", "Program");
  
  /**
   * Gets the value of the Agreement field.
   * The agreement being ceded to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIAgreement getAgreement();
  
  
  /**
   * not sure this should use the agreement currency
   * @return the currency associated with the agreement
   */
  public typekey.Currency getAgreementCurrency();
  
  
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
  
  
  /**
   * Gets the value of the Program field.
   * The reinsurance program that applies to this premium
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIProgram getProgram();
  
  
  /**
   * Returns true if this is effective for the given period.
   * @param start start of the period
   * @param end end of the period
   * @return true if effective window overlaps given dates, false otherwise
   */
  public boolean isEffective(java.util.Date start, java.util.Date end);
  
  
  /**
   * Returns true if this is effective at the given date.
   * @param date the date to check
   * @return true if this is effective at given date, false otherwise
   */
  public boolean isEffectiveAt(java.util.Date date);
  
  
  /**
   * Returns true if the effective window of this overlaps with the effective window of other.
   * @param other the other eff dated
   * @return true if the effective windows of this and other overlap, false otherwise.
   */
  public boolean isOverlap(entity.SimpleEffDated other);
  
  
  /**
   * Sets the value of the Agreement field.
   */
  public void setAgreement(entity.RIAgreement value);
  
  
  /**
   * Sets the value of the BasisGNP field.
   */
  public void setBasisGNP(gw.pl.currency.MonetaryAmount value);
  
  
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
   * Sets the value of the CededRiskAmount field.
   */
  public void setCededRiskAmount(gw.pl.currency.MonetaryAmount value);
  
  
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
  
  
  /**
   * Sets the value of the Program field.
   */
  public void setProgram(entity.RIProgram value);
  
  
  
}