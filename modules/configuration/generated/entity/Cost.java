package entity;

/**
 * Cost
 * 
 *     A delegate representing a unit of price for a period of time that should not be broken up any further.
 *         It must be implemented only by an EffDatedBean so that the current cost amount has an effective period.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Cost.eti;Cost.eix;Cost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public interface Cost extends entity.EffDated {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.Cost> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.Cost>("entity.Cost");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTUALADJRATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ActualAdjRate", "ActualAdjRate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> ACTUALAMOUNT_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("ActualAmount", "ActualAmount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> ACTUALAMOUNTBILLING_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("ActualAmountBilling", "ActualAmountBilling");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTUALAMOUNTBILLING_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ActualAmountBilling_amt", "ActualAmountBilling");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ACTUALAMOUNTBILLING_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("ActualAmountBilling_cur", "ActualAmountBilling_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTUALAMOUNT_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ActualAmount_amt", "ActualAmount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ACTUALAMOUNT_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("ActualAmount_cur", "ActualAmount_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTUALBASERATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ActualBaseRate", "ActualBaseRate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> ACTUALTERMAMOUNT_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("ActualTermAmount", "ActualTermAmount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> ACTUALTERMAMOUNTBILLING_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("ActualTermAmountBilling", "ActualTermAmountBilling");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTUALTERMAMOUNTBILLING_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ActualTermAmountBilling_amt", "ActualTermAmountBilling");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ACTUALTERMAMOUNTBILLING_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("ActualTermAmountBilling_cur", "ActualTermAmountBilling_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTUALTERMAMOUNT_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ActualTermAmount_amt", "ActualTermAmount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ACTUALTERMAMOUNT_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("ActualTermAmount_cur", "ActualTermAmount_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BASIS_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Basis", "Basis");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BILLGROUP_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("BillGroup", "BillGroup_Ext");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHARGEGROUP_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("ChargeGroup", "ChargeGroup");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CHARGEPATTERN_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("ChargePattern", "ChargePattern");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> COSTCODE_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("CostCode", "CostCode_ExtID");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FXRATECONVERSIONUSED_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("FXRateConversionUsed", "FXRateConversionUsed");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NUMDAYSINRATEDTERM_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("NumDaysInRatedTerm", "NumDaysInRatedTerm");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDABLE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("Overridable", "Overridable");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDEADJRATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("OverrideAdjRate", "OverrideAdjRate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> OVERRIDEAMOUNT_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("OverrideAmount", "OverrideAmount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> OVERRIDEAMOUNTBILLING_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("OverrideAmountBilling", "OverrideAmountBilling");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDEAMOUNTBILLING_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("OverrideAmountBilling_amt", "OverrideAmountBilling");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> OVERRIDEAMOUNTBILLING_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("OverrideAmountBilling_cur", "OverrideAmountBilling_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDEAMOUNT_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("OverrideAmount_amt", "OverrideAmount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> OVERRIDEAMOUNT_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("OverrideAmount_cur", "OverrideAmount_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDEBASERATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("OverrideBaseRate", "OverrideBaseRate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDEREASON_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("OverrideReason", "OverrideReason");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> OVERRIDESOURCE_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("OverrideSource", "OverrideSource");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> OVERRIDETERMAMOUNT_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("OverrideTermAmount", "OverrideTermAmount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> OVERRIDETERMAMOUNTBILLING_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("OverrideTermAmountBilling", "OverrideTermAmountBilling");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDETERMAMOUNTBILLING_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("OverrideTermAmountBilling_amt", "OverrideTermAmountBilling");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> OVERRIDETERMAMOUNTBILLING_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("OverrideTermAmountBilling_cur", "OverrideTermAmountBilling_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDETERMAMOUNT_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("OverrideTermAmount_amt", "OverrideTermAmount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> OVERRIDETERMAMOUNT_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("OverrideTermAmount_cur", "OverrideTermAmount_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYFXRATE_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("PolicyFXRate", "PolicyFXRate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRORATIONMETHOD_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("ProrationMethod", "ProrationMethod");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> RATEAMOUNTTYPE_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("RateAmountType", "RateAmountType");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> RATEBOOK_DYNPROP = new com.guidewire.commons.metadata.types.LinkDynPropertyInfo("RateBook", "RateBook");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ROUNDINGLEVEL_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("RoundingLevel", "RoundingLevel");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ROUNDINGMODE_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("RoundingMode", "RoundingMode");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STANDARDADJRATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StandardAdjRate", "StandardAdjRate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> STANDARDAMOUNT_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("StandardAmount", "StandardAmount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> STANDARDAMOUNTBILLING_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("StandardAmountBilling", "StandardAmountBilling");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STANDARDAMOUNTBILLING_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StandardAmountBilling_amt", "StandardAmountBilling");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STANDARDAMOUNTBILLING_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("StandardAmountBilling_cur", "StandardAmountBilling_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STANDARDAMOUNT_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StandardAmount_amt", "StandardAmount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STANDARDAMOUNT_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("StandardAmount_cur", "StandardAmount_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STANDARDBASERATE_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StandardBaseRate", "StandardBaseRate");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> STANDARDTERMAMOUNT_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("StandardTermAmount", "StandardTermAmount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> STANDARDTERMAMOUNTBILLING_DYNPROP = new com.guidewire.commons.metadata.types.MonetaryAmountDynPropertyInfo("StandardTermAmountBilling", "StandardTermAmountBilling");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STANDARDTERMAMOUNTBILLING_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StandardTermAmountBilling_amt", "StandardTermAmountBilling");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STANDARDTERMAMOUNTBILLING_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("StandardTermAmountBilling_cur", "StandardTermAmountBilling_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STANDARDTERMAMOUNT_AMT_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("StandardTermAmount_amt", "StandardTermAmount");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STANDARDTERMAMOUNT_CUR_DYNPROP = new com.guidewire.commons.metadata.types.TypekeyDynPropertyInfo("StandardTermAmount_cur", "StandardTermAmount_cur");
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SUBJECTTOREPORTING_DYNPROP = new com.guidewire.commons.metadata.types.ColumnDynPropertyInfo("SubjectToReporting", "SubjectToReporting");
  
  /**
   * Clone method solely for the purposes of exposing to the CostData machinery in Gosu
   */
  public entity.Cost cloneCost();
  
  
  /**
   * Copies the values of the StandardBaseRate, StandardAdjRate, StandardTermAmount, and StandardAmount columns
   * into the ActualBaseRate, ActualAdjRate, ActualTermAmount, and ActualAmount columns.
   */
  public void copyStandardColumnsToActualColumns();
  
  
  public entity.Transaction createTransaction(entity.PolicyPeriod branch);
  
  
  /**
   * 
   * @return A description of this cost suitable for debugging.
   */
  public java.lang.String debugString();
  
  
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
   * Return the amount prorated from the costs's effective date to the <code>endDate</code>, rounded to the
   * <code>roundingLevel</code>.
   * @param endDate The end date of the proration period.  This method throws if the endDate is not within the cost's effective period.
   * @param roundingLevel The level to round the prorated amount to.
   * @return The prorated amount.
   */
  public gw.pl.currency.MonetaryAmount getAmountAt(java.util.Date endDate, java.math.RoundingMode roundingLevel);
  
  
  /**
   * Return the amount prorated from the <code>startDate</code> to the <code>endDate</code>, rounded to the
   * <code>roundingLevel</code>
   * @param startDate The start date of the proration period.  This method throws if the startDate is not within the cost's effective period.
   * @param endDate The end date of the proration period.  This method throws if the endDate is not within the cost's effective period and on or after the startDate.
   * @param roundingLevel The level to round the prorated amount to.
   * @return The prorated amount.
   */
  public gw.pl.currency.MonetaryAmount getAmountBetween(java.util.Date startDate, java.util.Date endDate, java.math.RoundingMode roundingLevel);
  
  
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
  
  
  /**
   * 
   * @return A key that hashes in such away that costs that have the same values in their DM declared
   *         properties will be considered the same.  It does not compare GW declared properties, nor properties
   *         gotten from the Cost itself.
   */
  public gw.api.domain.financials.CostKey getCostKey();
  
  
  public entity.Coverable getCoverable();
  
  
  /**
   * 
   * @return The date this cost becomes effective.  This is simply another accessor to {@link entity.EffDated#getEffectiveDate()}.
   */
  public java.util.Date getEffDate();
  
  
  /**
   * 
   * @return The date on which this cost expires.  This is simply another accessor to {@link entity.EffDated#getExpirationDate()}.
   */
  public java.util.Date getExpDate();
  
  
  public java.lang.String getNameOfCoverable();
  
  
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
  
  
  public entity.PolicyLine getPolicyLine();
  
  
  /**
   * 
   * @return the number of days in the effective period divided by the number of days in the rated period.
   *         This factor should only be used for display purposes.
   */
  public double getProration();
  
  
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
  
  
  public entity.Reinsurable getReinsurable();
  
  
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
   * Return true if the cost is fundamentally the same, that is,
   * the Basis, StdRate, Rate, TermAmount and NumDaysInRatedTerm are the same.
   * @param value the cost to be compared to
   * @return true if costs are the same
   */
  public boolean isCostEqual(entity.Cost value);
  
  
  /**
   * Gets the value of the FXRateConversionUsed field.
   * Flags when the PolicyFXRate is used to convert amounts from coverage currency to settlement currency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFXRateConversionUsed();
  
  
  public boolean isMatchingBean(entity.KeyableBean bean);
  
  
  /**
   * Gets the value of the Overridable field.
   * Indicates whether this cost can have an override applied; most likely set by the rating engine.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isOverridable();
  
  
  /**
   * 
   * @return true when the length of the effective period does not match the number of days in the rated term
   */
  public boolean isProrated();
  
  
  /**
   * Gets the value of the SubjectToReporting field.
   * Indicates whether this cost is subject to reporting.  If a cost is subject to reporting and a policy has a reporting plan, that cost will only generate charged transactions during report jobs and final audit.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSubjectToReporting();
  
  
  /**
   * Merges this cost with the <code>other</code> cost and returns true if it succeeds.  This happens if both costs
   * have the same {@link #getCostKey() CostKey}, {@link #isCostEqual(entity.Cost) are fundamentally the same} and
   * abut each other in effective time.  On merge, this cost's effective period is expanded to the other's, and
   * the other cost is removed.
   * @param other the cost to be merged
   * @return true if the costs were successfully merged
   */
  public boolean merge(entity.Cost other);
  
  
  /**
   * {@link #merge(entity.Cost) Merges} this cost with the <code>other</code> cost if they
   * {@link #isCostEqual(entity.Cost) are fundamentally the same}.
   * @param other the cost to be checked and possibly merged
   * @return true if the costs are merged
   */
  public boolean mergeIfCostEqual(entity.Cost other);
  
  
  public java.util.List<entity.Transaction> offset(entity.PolicyPeriod branch, java.util.Set<java.util.Date> transactionDates, java.math.RoundingMode roundingLevel);
  
  
  public java.util.List<entity.Transaction> onset(entity.PolicyPeriod branch, java.util.Set<java.util.Date> transactionDates, java.math.RoundingMode roundingLevel);
  
  
  /**
   * Remove a cost entirely from the term.  This is different from the normal {@link entity.EffDated#remove()}
   * mechanics that normally truncate the cost to the slice date.  This method removes and never persists a cost if
   * it has not been persisted.  If it has already been persisted, then it sets ExpirationDate to the EffectiveDate so
   * that it has 0 days of effectivity.
   */
  public void removeFromTerm();
  
  
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
  
  
  /**
   * The date this cost becomes effective.  This is simply another accessor to {@link entity.EffDated#setEffectiveDate(Date)}.
   * @param effDate the effective date to be set
   */
  public void setEffDate(java.util.Date effDate);
  
  
  /**
   * The date on which this cost expires.  This is simply another accessor to {@link entity.EffDated#setExpirationDate(Date)}.
   * @param expDate the expiration date to be set
   */
  public void setExpDate(java.util.Date expDate);
  
  
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
   * Sets the value of the PolicyFXRate field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPolicyFXRate(entity.PolicyFXRate value);
  
  
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
   * Sets the value of the SubjectToReporting field.
   */
  public void setSubjectToReporting(java.lang.Boolean value);
  
  
  /**
   * Given, the term amount, term effective period, and the current effective period, updates the current
   * amount, the transaction amount and the transaction effective period.
   * @param roundingLevel the rounding level used when prorating the term amount to the current amount.
   *                      See {@link RoundingMode#HALF_UP} for more details.
   */
  public void updateAmount(java.math.RoundingMode roundingLevel);
  
  
  
}