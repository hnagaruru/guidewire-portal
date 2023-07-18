package entity;

/**
 * BACost
 * A Commercial Auto unit of price for a period of time that should not be broken up any further.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BACost.eti;BACost.eix;BACost.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class BACost extends com.guidewire.pl.persistence.code.BeanBase implements entity.EffDated, entity.Cost {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.BACost, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.BACost, entity.PolicyPeriod>("entity.BACost");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTUALADJRATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ActualAdjRate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> ACTUALAMOUNT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "ActualAmount");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> ACTUALAMOUNTBILLING_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "ActualAmountBilling");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTUALAMOUNTBILLING_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ActualAmountBilling_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ACTUALAMOUNTBILLING_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ActualAmountBilling_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTUALAMOUNT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ActualAmount_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ACTUALAMOUNT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ActualAmount_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTUALBASERATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ActualBaseRate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> ACTUALTERMAMOUNT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "ActualTermAmount");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> ACTUALTERMAMOUNTBILLING_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "ActualTermAmountBilling");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTUALTERMAMOUNTBILLING_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ActualTermAmountBilling_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ACTUALTERMAMOUNTBILLING_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ActualTermAmountBilling_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTUALTERMAMOUNT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ActualTermAmount_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ACTUALTERMAMOUNT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ActualTermAmount_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BasedOnValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BASIS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Basis");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BILLGROUP_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BillGroup");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHVALUE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BranchValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BUSINESSAUTOLINE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BusinessAutoLine");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BUSINESSVEHICLE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BusinessVehicle");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CHANGETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ChangeType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHARGEGROUP_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ChargeGroup");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CHARGEPATTERN_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ChargePattern");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> COSTCODE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CostCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FXRATECONVERSIONUSED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FXRateConversionUsed");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXED_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Fixed");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> JURISDICTION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Jurisdiction");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NUMDAYSINRATEDTERM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NumDaysInRatedTerm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDABLE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Overridable");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDEADJRATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OverrideAdjRate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> OVERRIDEAMOUNT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "OverrideAmount");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> OVERRIDEAMOUNTBILLING_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "OverrideAmountBilling");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDEAMOUNTBILLING_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OverrideAmountBilling_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> OVERRIDEAMOUNTBILLING_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "OverrideAmountBilling_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDEAMOUNT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OverrideAmount_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> OVERRIDEAMOUNT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "OverrideAmount_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDEBASERATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OverrideBaseRate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDEREASON_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OverrideReason");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> OVERRIDESOURCE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "OverrideSource");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> OVERRIDETERMAMOUNT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "OverrideTermAmount");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> OVERRIDETERMAMOUNTBILLING_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "OverrideTermAmountBilling");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDETERMAMOUNTBILLING_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OverrideTermAmountBilling_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> OVERRIDETERMAMOUNTBILLING_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "OverrideTermAmountBilling_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OVERRIDETERMAMOUNT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OverrideTermAmount_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> OVERRIDETERMAMOUNT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "OverrideTermAmount_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYFXRATE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyFXRate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PRORATIONMETHOD_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ProrationMethod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> RATEAMOUNTTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RateAmountType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> RATEBOOK_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "RateBook");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> RATEDORDER_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RatedOrder");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ROUNDINGLEVEL_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RoundingLevel");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ROUNDINGMODE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RoundingMode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STANDARDADJRATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StandardAdjRate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> STANDARDAMOUNT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "StandardAmount");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> STANDARDAMOUNTBILLING_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "StandardAmountBilling");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STANDARDAMOUNTBILLING_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StandardAmountBilling_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STANDARDAMOUNTBILLING_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "StandardAmountBilling_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STANDARDAMOUNT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StandardAmount_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STANDARDAMOUNT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "StandardAmount_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STANDARDBASERATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StandardBaseRate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> STANDARDTERMAMOUNT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "StandardTermAmount");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> STANDARDTERMAMOUNTBILLING_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "StandardTermAmountBilling");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STANDARDTERMAMOUNTBILLING_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StandardTermAmountBilling_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STANDARDTERMAMOUNTBILLING_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "StandardTermAmountBilling_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> STANDARDTERMAMOUNT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "StandardTermAmount_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STANDARDTERMAMOUNT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "StandardTermAmount_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SUBJECTTOREPORTING_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SubjectToReporting");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> TRANSACTIONS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "Transactions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.BACostInternal _internal;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods.BASEDONID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BRANCHID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.BRANCHID_DYNPROP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FIXEDID_DYNPROP = com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods.FIXEDID_DYNPROP;
  
  protected BACost(java.lang.Void ignored)  {
    
  }
  
  protected abstract com.guidewire._generated.entity.BACostInternal __createInternalInterface();
  
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected abstract com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap();
  
  
  protected com.guidewire._generated.entity.BACostInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the Transactions array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void addToTransactions(entity.BATransaction element) {
    __getInternalInterface().addArrayElement(TRANSACTIONS_PROP.get(), element);
  }
  
  public entity.BACost clone() {
    return (entity.BACost)__getInternalInterface().cloneUntyped();
  }
  
  /**
   * Clone method solely for the purposes of exposing to the CostData machinery in Gosu
   */
  public entity.Cost cloneCost() {
    return ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).cloneCost();
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Copies the values of the StandardBaseRate, StandardAdjRate, StandardTermAmount, and StandardAmount columns
   * into the ActualBaseRate, ActualAdjRate, ActualTermAmount, and ActualAmount columns.
   */
  public void copyStandardColumnsToActualColumns() {
    ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).copyStandardColumnsToActualColumns();
  }
  
  public entity.Transaction createTransaction(entity.PolicyPeriod branch) {
    return ((gw.api.domain.financials.CostAdapter)__getDelegateManager().getImplementation("gw.api.domain.financials.CostAdapter")).createTransaction(branch);
  }
  
  /**
   * 
   * @return A description of this cost suitable for debugging.
   */
  public java.lang.String debugString() {
    return ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).debugString();
  }
  
  /**
   * Gets the value of the ActualAdjRate field.
   * The adjusted rate (after mod factors are applied) for the cost over the rated term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getActualAdjRate() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(ACTUALADJRATE_PROP.get());
  }
  
  /**
   * Gets the value of the ActualAmount field.
   * The current amount for the effDated effective period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getActualAmount() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(ACTUALAMOUNT_PROP.get());
  }
  
  /**
   * Gets the value of the ActualAmountBilling field.
   * The current amount converted to the settlement currency for the effDated effective period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getActualAmountBilling() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(ACTUALAMOUNTBILLING_PROP.get());
  }
  
  /**
   * Gets the value of the ActualAmountBilling_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getActualAmountBilling_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(ACTUALAMOUNTBILLING_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the ActualAmountBilling_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getActualAmountBilling_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(ACTUALAMOUNTBILLING_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the ActualAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getActualAmount_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(ACTUALAMOUNT_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the ActualAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getActualAmount_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(ACTUALAMOUNT_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the ActualBaseRate field.
   * The base rate (before mod factors are applied) for the cost over the rated term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getActualBaseRate() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(ACTUALBASERATE_PROP.get());
  }
  
  /**
   * Gets the value of the ActualTermAmount field.
   * The cost over an rated term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getActualTermAmount() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(ACTUALTERMAMOUNT_PROP.get());
  }
  
  /**
   * Gets the value of the ActualTermAmountBilling field.
   * The cost converted to settlement currency over an rated term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getActualTermAmountBilling() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(ACTUALTERMAMOUNTBILLING_PROP.get());
  }
  
  /**
   * Gets the value of the ActualTermAmountBilling_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getActualTermAmountBilling_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(ACTUALTERMAMOUNTBILLING_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the ActualTermAmountBilling_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getActualTermAmountBilling_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(ACTUALTERMAMOUNTBILLING_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the ActualTermAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getActualTermAmount_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(ACTUALTERMAMOUNT_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the ActualTermAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getActualTermAmount_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(ACTUALTERMAMOUNT_CUR_PROP.get());
  }
  
  /**
   * Return the amount prorated from the costs's effective date to the <code>endDate</code>, rounded to the
   * <code>roundingLevel</code>.
   * @param endDate The end date of the proration period.  This method throws if the endDate is not within the cost's effective period.
   * @param roundingLevel The level to round the prorated amount to.
   * @return The prorated amount.
   */
  public gw.pl.currency.MonetaryAmount getAmountAt(java.util.Date endDate, java.math.RoundingMode roundingLevel) {
    return ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).getAmountAt(endDate, roundingLevel);
  }
  
  /**
   * Return the amount prorated from the <code>startDate</code> to the <code>endDate</code>, rounded to the
   * <code>roundingLevel</code>
   * @param startDate The start date of the proration period.  This method throws if the startDate is not within the cost's effective period.
   * @param endDate The end date of the proration period.  This method throws if the endDate is not within the cost's effective period and on or after the startDate.
   * @param roundingLevel The level to round the prorated amount to.
   * @return The prorated amount.
   */
  public gw.pl.currency.MonetaryAmount getAmountBetween(java.util.Date startDate, java.util.Date endDate, java.math.RoundingMode roundingLevel) {
    return ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).getAmountBetween(startDate, endDate, roundingLevel);
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getArchivePartition() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
  }
  
  public entity.BACost getBasedOn() {
    return (entity.BACost)__getInternalInterface().getBasedOnUntyped();
  }
  
  /**
   * Return the bean from which this bean was based (cloned), or null if this
   * bean is new to this branch. This value will never change for the life of
   * the bean as its set when the bean is first created, either as a bean new to
   * this branch (in which case it's null) or when this bean is cloned from a
   * bean in an existing branch when its branch is created.
   * <p/>
   * When compiling DiffItems a bean is always compared to it's based-on bean to
   * discover what fields on it have changed. If there is no based-on bean then
   * we know that this bean was new to this branch.
   * @return Bean on which this bean was based (cloned), or null if this bean is
   *         new to this branch.
   */
  public entity.EffDated getBasedOnUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBasedOnUntyped();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BACost getBasedOnValue() {
    return (entity.BACost)__getInternalInterface().getFieldValue(BASEDONVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the Basis field.
   * The basis for the cost over the rated term.  The basis type itself may vary (e.g. units of risk, units of money, etc.)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getBasis() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(BASIS_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the BillGroup field.
   * Custom grouping for costs itemised for billing but collected as one charge
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBillGroup() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BILLGROUP_PROP.get());
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Return the branch associated with this bean. This can never be null, and
   * will never change. A bean will always be associated with the same branch.
   * @return Branch associated with this bean
   */
  public entity.EffDatedBranch getBranchUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getBranchUntyped();
  }
  
  /**
   * Gets the value of the BranchValue field.
   * Link to root of effdated tree
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getBranchValue() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(BRANCHVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the BusinessAutoLine field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessAutoLine getBusinessAutoLine() {
    return (entity.BusinessAutoLine)__getInternalInterface().getFieldValue(BUSINESSAUTOLINE_PROP.get());
  }
  
  /**
   * Gets the value of the BusinessVehicle field.
   * The Business Vehicle related to the this Cost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessVehicle getBusinessVehicle() {
    return (entity.BusinessVehicle)__getInternalInterface().getFieldValue(BUSINESSVEHICLE_PROP.get());
  }
  
  /**
   * Gets the value of the ChangeType field.
   * Type of change made to this row
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.EffDatedChangeType getChangeType() {
    return (typekey.EffDatedChangeType)__getInternalInterface().getFieldValue(CHANGETYPE_PROP.get());
  }
  
  /**
   * Gets the value of the ChargeGroup field.
   * Custom group name to group charges together
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChargeGroup() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHARGEGROUP_PROP.get());
  }
  
  /**
   * Gets the value of the ChargePattern field.
   * The type of charge (Premium, Taxes, Fee)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ChargePattern getChargePattern() {
    return (typekey.ChargePattern)__getInternalInterface().getFieldValue(CHARGEPATTERN_PROP.get());
  }
  
  /**
   * Gets the value of the CostCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.CostCode getCostCode() {
    return (entity.CostCode)__getInternalInterface().getFieldValue(COSTCODE_PROP.get());
  }
  
  /**
   * 
   * @return A key that hashes in such away that costs that have the same values in their DM declared
   *         properties will be considered the same.  It does not compare GW declared properties, nor properties
   *         gotten from the Cost itself.
   */
  public gw.api.domain.financials.CostKey getCostKey() {
    return ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).getCostKey();
  }
  
  public entity.Coverable getCoverable() {
    return ((gw.api.domain.financials.CostAdapter)__getDelegateManager().getImplementation("gw.api.domain.financials.CostAdapter")).getCoverable();
  }
  
  /**
   * Gets the value of the CreateTime field.
   * Timestamp when the object was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCreateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CREATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the CreateUser field.
   * User who created the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getCreateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(CREATEUSER_PROP.get());
  }
  
  /**
   * 
   * @return The date this cost becomes effective.  This is simply another accessor to {@link entity.EffDated#getEffectiveDate()}.
   */
  public java.util.Date getEffDate() {
    return ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).getEffDate();
  }
  
  /**
   * Get an effective date independent key for this bean. This key will include
   * the BranchId and the FixedId. This is the key for the "logical" bean.
   * <p/>
   * An EffDatedKey only really applies to EffDateds as an EffDatedBranch is
   * the same throughout its effective range (or its period range) so there is
   * no difference between the "logical" bean and the actual bean.
   */
  public gw.pl.persistence.core.effdate.EffDatedKey getEffDatedKey() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getEffDatedKey();
  }
  
  /**
   * Get the date when this bean starts being effective.
   * @return Date when this bean starts being effective.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getEffectiveDate();
  }
  
  /**
   * 
   * @return The date on which this cost expires.  This is simply another accessor to {@link entity.EffDated#getExpirationDate()}.
   */
  public java.util.Date getExpDate() {
    return ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).getExpDate();
  }
  
  /**
   * Get the date when this bean expires.
   * @return Date when this bean expires.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getExpirationDate();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BACost getFixed() {
    return (entity.BACost)__getInternalInterface().getFieldValue(FIXED_PROP.get());
  }
  
  /**
   * Get the logical ID for this bean, not the row ID. All row
   * @return Logical ID for this bean, not the row ID.
   */
  public gw.pl.persistence.core.Key getFixedId() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getFixedId();
  }
  
  /**
   * Gets the value of the FrozenSet field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.FrozenSet getFrozenSet() {
    return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the Jurisdiction field.
   * The Jurisdiction related to the this Cost
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BAJurisdiction getJurisdiction() {
    return (entity.BAJurisdiction)__getInternalInterface().getFieldValue(JURISDICTION_PROP.get());
  }
  
  /**
   * Get the version list for an effective dated foreign key.  You need this
   * method because it's the only way to get the version list for a foreign key
   * bean if you're in window mode. You can't call this.getFKBean().getVersionListUntyped()
   * since you can't traverse the array and there are no methods on
   * EffDatedVersionList to access a FK (only arrays).
   * <p/>
   * This bean can be unsliced or sliced when this is called.
   * @param link Effective dated foreign key
   * @return Version list for an effective dated foreign key
   */
  public gw.pl.persistence.core.effdate.EffDatedVersionList getLinkVersionList(gw.entity.ILinkPropertyInfo link) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getLinkVersionList(link);
  }
  
  public java.lang.String getNameOfCoverable() {
    return ((gw.api.domain.financials.CostAdapter)__getDelegateManager().getImplementation("gw.api.domain.financials.CostAdapter")).getNameOfCoverable();
  }
  
  /**
   * Gets the value of the NumDaysInRatedTerm field.
   * The number of days in the term period used to arrive at the rate.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumDaysInRatedTerm() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMDAYSINRATEDTERM_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideAdjRate field.
   * The user-specified override for the adjusted rate.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOverrideAdjRate() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(OVERRIDEADJRATE_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideAmount field.
   * The user-specified override for the amount.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getOverrideAmount() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(OVERRIDEAMOUNT_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideAmountBilling field.
   * The user-specified override converted to settlement currency for the amount.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getOverrideAmountBilling() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(OVERRIDEAMOUNTBILLING_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideAmountBilling_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOverrideAmountBilling_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(OVERRIDEAMOUNTBILLING_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideAmountBilling_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getOverrideAmountBilling_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(OVERRIDEAMOUNTBILLING_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOverrideAmount_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(OVERRIDEAMOUNT_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getOverrideAmount_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(OVERRIDEAMOUNT_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideBaseRate field.
   * The user-specified override for the base rate.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOverrideBaseRate() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(OVERRIDEBASERATE_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideReason field.
   * Why the override is being applied.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOverrideReason() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OVERRIDEREASON_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideSource field.
   * Source of override, or null if none
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.OverrideSourceType getOverrideSource() {
    return (typekey.OverrideSourceType)__getInternalInterface().getFieldValue(OVERRIDESOURCE_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideTermAmount field.
   * The user-specified override for the term amount.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getOverrideTermAmount() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(OVERRIDETERMAMOUNT_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideTermAmountBilling field.
   * The user-specified override converted to settlement currency for the term amount.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getOverrideTermAmountBilling() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(OVERRIDETERMAMOUNTBILLING_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideTermAmountBilling_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOverrideTermAmountBilling_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(OVERRIDETERMAMOUNTBILLING_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideTermAmountBilling_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getOverrideTermAmountBilling_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(OVERRIDETERMAMOUNTBILLING_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideTermAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getOverrideTermAmount_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(OVERRIDETERMAMOUNT_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the OverrideTermAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getOverrideTermAmount_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(OVERRIDETERMAMOUNT_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyFXRate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyFXRate getPolicyFXRate() {
    return (entity.PolicyFXRate)__getInternalInterface().getFieldValue(POLICYFXRATE_PROP.get());
  }
  
  public entity.PolicyLine getPolicyLine() {
    return ((gw.api.domain.financials.CostAdapter)__getDelegateManager().getImplementation("gw.api.domain.financials.CostAdapter")).getPolicyLine();
  }
  
  /**
   * 
   * @return the number of days in the effective period divided by the number of days in the rated period.
   *         This factor should only be used for display purposes.
   */
  public double getProration() {
    return ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).getProration();
  }
  
  /**
   * Gets the value of the ProrationMethod field.
   * Procedure used to derive Amount from Term Amount, e.g. day-based pro-rata, or flat
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.ProrationMethod getProrationMethod() {
    return (typekey.ProrationMethod)__getInternalInterface().getFieldValue(PRORATIONMETHOD_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the RateAmountType field.
   * Tax/surcharge, a standard premium, or a non-standard premium
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RateAmountType getRateAmountType() {
    return (typekey.RateAmountType)__getInternalInterface().getFieldValue(RATEAMOUNTTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the RateBook field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBook getRateBook() {
    return (entity.RateBook)__getInternalInterface().getFieldValue(RATEBOOK_PROP.get());
  }
  
  /**
   * Gets the value of the RatedOrder field.
   * The order in which this cost was rated.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BARatedOrderType getRatedOrder() {
    return (typekey.BARatedOrderType)__getInternalInterface().getFieldValue(RATEDORDER_PROP.get());
  }
  
  public entity.Reinsurable getReinsurable() {
    return ((gw.api.domain.financials.CostAdapter)__getDelegateManager().getImplementation("gw.api.domain.financials.CostAdapter")).getReinsurable();
  }
  
  /**
   * Gets the value of the RoundingLevel field.
   * Number of decimal places to which this cost should be rounded when prorated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getRoundingLevel() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(ROUNDINGLEVEL_PROP.get());
  }
  
  /**
   * Gets the value of the RoundingMode field.
   * Rounding mode (e.g. HALF_UP) to be used when prorating
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RoundingModeType getRoundingMode() {
    return (typekey.RoundingModeType)__getInternalInterface().getFieldValue(ROUNDINGMODE_PROP.get());
  }
  
  public entity.BACost getSlice(java.util.Date sliceDate) {
    return (entity.BACost)getSliceUntyped(sliceDate);
  }
  
  /**
   * Date which this bean is "sliced" or viewed. If you traverse from this bean
   * to another bean or beans via a link or array, only beans that are effective
   * at this slice date will be returned. The beans that are returned will be
   * sliced at this date as well. If NULL then the bean is in "window" mode.
   * <p/>
   * In most cases a bean will be sliced, window mode is used in special cases.
   * @return Date which bean is sliced or null if in window mode.
   */
  public java.util.Date getSliceDate() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceDate();
  }
  
  /**
   * Slice this bean at a particular date. This bean can be unsliced or sliced
   * when this method is called. The slice date must be within the effective
   * range of this bean or an exception will be thrown. If you want to get at
   * the version of this "logical" bean at a date outside of this particular
   * bean's effective range then use this.getVersionListUntyped().getVersionAsOf(sliceDate).getSliceUntyped(sliceDate).
   * @param sliceDate Date at which to slice this bean.
   * @return Sliced version of the bean.
   */
  public entity.EffDatedBase getSliceUntyped(java.util.Date sliceDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getSliceUntyped(sliceDate);
  }
  
  /**
   * Gets the value of the StandardAdjRate field.
   * The adjusted rate (after mod factors are applied) for the cost over the rated term, as calculated based on the standard base rate.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStandardAdjRate() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(STANDARDADJRATE_PROP.get());
  }
  
  /**
   * Gets the value of the StandardAmount field.
   * The current amount for the effDated effective period, as calculated based on the standard rates.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getStandardAmount() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(STANDARDAMOUNT_PROP.get());
  }
  
  /**
   * Gets the value of the StandardAmountBilling field.
   * The current amount for the effDated effective period, as calculated based on the standard rates.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getStandardAmountBilling() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(STANDARDAMOUNTBILLING_PROP.get());
  }
  
  /**
   * Gets the value of the StandardAmountBilling_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStandardAmountBilling_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(STANDARDAMOUNTBILLING_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the StandardAmountBilling_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getStandardAmountBilling_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(STANDARDAMOUNTBILLING_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the StandardAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStandardAmount_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(STANDARDAMOUNT_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the StandardAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getStandardAmount_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(STANDARDAMOUNT_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the StandardBaseRate field.
   * The standard base rate (before mod factors are applied) for the cost over the rated term.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStandardBaseRate() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(STANDARDBASERATE_PROP.get());
  }
  
  /**
   * Gets the value of the StandardTermAmount field.
   * The cost over an rated term, as calculated based on the standard rates.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getStandardTermAmount() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(STANDARDTERMAMOUNT_PROP.get());
  }
  
  /**
   * Gets the value of the StandardTermAmountBilling field.
   * The cost over an rated term converted to settlement currency, as calculated based on the standard rates.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getStandardTermAmountBilling() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(STANDARDTERMAMOUNTBILLING_PROP.get());
  }
  
  /**
   * Gets the value of the StandardTermAmountBilling_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStandardTermAmountBilling_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(STANDARDTERMAMOUNTBILLING_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the StandardTermAmountBilling_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getStandardTermAmountBilling_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(STANDARDTERMAMOUNTBILLING_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the StandardTermAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getStandardTermAmount_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(STANDARDTERMAMOUNT_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the StandardTermAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getStandardTermAmount_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(STANDARDTERMAMOUNT_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BACost getSubtype() {
    return (typekey.BACost)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BATransaction[] getTransactions() {
    return (entity.BATransaction[])__getInternalInterface().getFieldValue(TRANSACTIONS_PROP.get());
  }
  
  public entity.BACost getUnsliced() {
    return (entity.BACost)getUnslicedUntyped();
  }
  
  /**
   * Return the unsliced version of this bean. If the bean is already unsliced
   * then returns itself.
   * @return An unsliced version of this bean. If the bean is already unsliced
   *         then returns itself.
   */
  public entity.EffDated getUnslicedUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).getUnslicedUntyped();
  }
  
  /**
   * Gets the value of the UpdateTime field.
   * Timestamp when the object was last updated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getUpdateTime() {
    return (java.util.Date)__getInternalInterface().getFieldValue(UPDATETIME_PROP.get());
  }
  
  /**
   * Gets the value of the UpdateUser field.
   * User who last updated the object
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.User getUpdateUser() {
    return (entity.User)__getInternalInterface().getFieldValue(UPDATEUSER_PROP.get());
  }
  
  public entity.windowed.BACostVersionList getVersionList() {
    return (entity.windowed.BACostVersionList)getVersionListUntyped();
  }
  
  /**
   * Get the version list for this bean. An EffDatedVersionList is a
   * representation of a logical bean through its effective range. For example,
   * if a bean has changes at three separate effective dates then the version
   * list will comprise 3 versions of the bean, one for each of these dates.
   * <p/>
   * You can use an EffDatedVersionList to traverse from this bean to other
   * linked beans in window mode. Recall that in window mode you cannot traverse
   * links directly from the bean.
   * <p/>
   * Although an EffDatedBranch only has a single version throughout its
   * effective range you can still get its EffDatedVersionList in order to
   * navigate in window mode from the branch to its related EffDateds.
   * @return Version list for this bean
   */
  public gw.pl.persistence.core.effdate.EffDatedVersionList getVersionListUntyped() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).getVersionListUntyped();
  }
  
  /**
   * Return true if the cost is fundamentally the same, that is,
   * the Basis, StdRate, Rate, TermAmount and NumDaysInRatedTerm are the same.
   * @param value the cost to be compared to
   * @return true if costs are the same
   */
  public boolean isCostEqual(entity.Cost value) {
    return ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).isCostEqual(value);
  }
  
  /**
   * Given a date, check whether it falls within this bean's effective window.
   * @param effDate Date to check
   * @return True if date is within this bean's effective window.
   */
  public boolean isEffective(java.util.Date effDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isEffective(effDate);
  }
  
  /**
   * Gets the value of the FXRateConversionUsed field.
   * Flags when the PolicyFXRate is used to convert amounts from coverage currency to settlement currency
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isFXRateConversionUsed() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(FXRATECONVERSIONUSED_PROP.get());
  }
  
  /**
   * Returns true if the given field has been modified relative to the based-on
   * bean and false if this bean has no based-on or if the field has the same
   * value as for the based-on bean.  This method only works with non-array
   * fields.
   * @param field the name of the property to check for changes, which must
   *              correspond to a database column (i.e. it can't be an array or
   *              a synthetic property)
   * @return true if the field has a different value for the based-on bean,
   *         false otherwise
   */
  public boolean isFieldChangedFromBasedOn(java.lang.String field) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).isFieldChangedFromBasedOn(field);
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
  }
  
  public boolean isMatchingBean(entity.KeyableBean bean) {
    return ((gw.api.domain.financials.CostAdapter)__getDelegateManager().getImplementation("gw.api.domain.financials.CostAdapter")).isMatchingBean(bean);
  }
  
  /**
   * 
   * @return true if this bean is to be inserted into the database when the bundle is committed.
   */
  public boolean isNew() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).isNew();
  }
  
  /**
   * 
   * @return True if the object was created by importation from an external system,
   *         False if it was created internally. Note that this refers to the currently
   *         instantiated object, not the data it represents
   */
  public boolean isNewlyImported() {
    return ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).isNewlyImported();
  }
  
  /**
   * Gets the value of the Overridable field.
   * Indicates whether this cost can have an override applied; most likely set by the rating engine.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isOverridable() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(OVERRIDABLE_PROP.get());
  }
  
  /**
   * Check if this bean or branch has been promoted. A promoted bean is also
   * locked and cannot be changed.
   * <p/>
   * An EffDated is never promoted independent of its related
   * EffDatedBranch, meaning if the branch is promoted every bean in the graph
   * will be promoted, and if the branch is not promoted no bean in the graph
   * can be promoted.
   * @return True if promoted.
   */
  public boolean isPromoted() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isPromoted();
  }
  
  /**
   * 
   * @return true when the length of the effective period does not match the number of days in the rated term
   */
  public boolean isProrated() {
    return ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).isProrated();
  }
  
  /**
   * Whether this bean is sliced. If a bean is sliced then you can navigate from
   * this bean to another bean or beans via a link or array, if it's unsliced
   * (in "window" mode) you cannot navigate from this bean.
   * <p/>
   * In most cases a bean will be sliced, window mode is used in special cases.
   * @return 
   */
  public boolean isSlice() {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).isSlice();
  }
  
  /**
   * Gets the value of the SubjectToReporting field.
   * Indicates whether this cost is subject to reporting.  If a cost is subject to reporting and a policy has a reporting plan, that cost will only generate charged transactions during report jobs and final audit.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSubjectToReporting() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(SUBJECTTOREPORTING_PROP.get());
  }
  
  /**
   * Merges this cost with the <code>other</code> cost and returns true if it succeeds.  This happens if both costs
   * have the same {@link #getCostKey() CostKey}, {@link #isCostEqual(entity.Cost) are fundamentally the same} and
   * abut each other in effective time.  On merge, this cost's effective period is expanded to the other's, and
   * the other cost is removed.
   * @param other the cost to be merged
   * @return true if the costs were successfully merged
   */
  public boolean merge(entity.Cost other) {
    return ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).merge(other);
  }
  
  /**
   * {@link #merge(entity.Cost) Merges} this cost with the <code>other</code> cost if they
   * {@link #isCostEqual(entity.Cost) are fundamentally the same}.
   * @param other the cost to be checked and possibly merged
   * @return true if the costs are merged
   */
  public boolean mergeIfCostEqual(entity.Cost other) {
    return ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).mergeIfCostEqual(other);
  }
  
  public java.util.List<entity.Transaction> offset(entity.PolicyPeriod branch, java.util.Set<java.util.Date> transactionDates, java.math.RoundingMode roundingLevel) {
    return ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).offset(branch, transactionDates, roundingLevel);
  }
  
  public java.util.List<entity.Transaction> onset(entity.PolicyPeriod branch, java.util.Set<java.util.Date> transactionDates, java.math.RoundingMode roundingLevel) {
    return ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).onset(branch, transactionDates, roundingLevel);
  }
  
  /**
   * Refreshes this bean with the latest database version.
   * <p/>
   * This method does nothing if the bean is edited or inserted in its current bundle. If the bean
   * no longer exists in the database, then <tt>null</tt> is returned. If the bean has been
   * evicted from its bundle, then <tt>null</tt> is returned. Otherwise, this bean is returned, with its contents
   * updated.
   */
  public entity.KeyableBean refresh() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).refresh();
  }
  
  /**
   * Marks this bean for remove. A bean marked for remove will be deleted or retired when the transaction
   * is committed. Once a bean is marked for remove, it cannot be switched to update, edit, or read.
   * <p>
   * WARNING: This method is designed for simple custom entities which are normally not
   * associated with other entities. Undesirable results may occur when used on out-of-box entities.
   */
  public void remove() {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).remove();
  }
  
  /**
   * Remove a cost entirely from the term.  This is different from the normal {@link entity.EffDated#remove()}
   * mechanics that normally truncate the cost to the slice date.  This method removes and never persists a cost if
   * it has not been persisted.  If it has already been persisted, then it sets ExpirationDate to the EffectiveDate so
   * that it has 0 days of effectivity.
   */
  public void removeFromTerm() {
    ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).removeFromTerm();
  }
  
  /**
   * Removes the given element from the Transactions array. This is achieved by marking the element for removal.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void removeFromTransactions(entity.BATransaction element) {
    __getInternalInterface().removeArrayElement(TRANSACTIONS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the Transactions array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromTransactions(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(TRANSACTIONS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the ActualAdjRate field.
   */
  public void setActualAdjRate(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(ACTUALADJRATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActualAmount field.
   */
  public void setActualAmount(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(ACTUALAMOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActualAmountBilling field.
   */
  public void setActualAmountBilling(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(ACTUALAMOUNTBILLING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActualAmountBilling_amt field.
   */
  private void setActualAmountBilling_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(ACTUALAMOUNTBILLING_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActualAmountBilling_cur field.
   */
  private void setActualAmountBilling_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(ACTUALAMOUNTBILLING_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActualAmount_amt field.
   */
  private void setActualAmount_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(ACTUALAMOUNT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActualAmount_cur field.
   */
  private void setActualAmount_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(ACTUALAMOUNT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActualBaseRate field.
   */
  public void setActualBaseRate(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(ACTUALBASERATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActualTermAmount field.
   */
  public void setActualTermAmount(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(ACTUALTERMAMOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActualTermAmountBilling field.
   */
  public void setActualTermAmountBilling(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(ACTUALTERMAMOUNTBILLING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActualTermAmountBilling_amt field.
   */
  private void setActualTermAmountBilling_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(ACTUALTERMAMOUNTBILLING_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActualTermAmountBilling_cur field.
   */
  private void setActualTermAmountBilling_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(ACTUALTERMAMOUNTBILLING_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActualTermAmount_amt field.
   */
  private void setActualTermAmount_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(ACTUALTERMAMOUNT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ActualTermAmount_cur field.
   */
  private void setActualTermAmount_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(ACTUALTERMAMOUNT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasedOnValue field.
   */
  private void setBasedOnValue(entity.BACost value) {
    __getInternalInterface().setFieldValue(BASEDONVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Basis field.
   */
  public void setBasis(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(BASIS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BillGroup field.
   */
  public void setBillGroup(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BILLGROUP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BranchValue field.
   */
  private void setBranchValue(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(BRANCHVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BusinessAutoLine field.
   */
  public void setBusinessAutoLine(entity.BusinessAutoLine value) {
    __getInternalInterface().setFieldValue(BUSINESSAUTOLINE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BusinessVehicle field.
   */
  public void setBusinessVehicle(entity.BusinessVehicle value) {
    __getInternalInterface().setFieldValue(BUSINESSVEHICLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ChangeType field.
   */
  private void setChangeType(typekey.EffDatedChangeType value) {
    __getInternalInterface().setFieldValue(CHANGETYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ChargeGroup field.
   */
  public void setChargeGroup(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CHARGEGROUP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ChargePattern field.
   */
  public void setChargePattern(typekey.ChargePattern value) {
    __getInternalInterface().setFieldValue(CHARGEPATTERN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CostCode field.
   */
  public void setCostCode(entity.CostCode value) {
    __getInternalInterface().setFieldValue(COSTCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateTime field.
   */
  private void setCreateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CreateUser field.
   */
  private void setCreateUser(entity.User value) {
    __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
  }
  
  /**
   * The date this cost becomes effective.  This is simply another accessor to {@link entity.EffDated#setEffectiveDate(Date)}.
   * @param effDate the effective date to be set
   */
  public void setEffDate(java.util.Date effDate) {
    ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).setEffDate(effDate);
  }
  
  /**
   * Change when the effective date of this bean. You cannot change the
   * effective date when in slice mode. In window mode there are no
   * restrictions.
   * <p/>
   * The effective date must be non-null. It must also come on or before the
   * expiration date and within the period range of its branch.
   * @param effDate New effective date
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setEffectiveDate(java.util.Date effDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveDate(effDate);
  }
  
  /**
   * Change the effective and expiration dates together. This can only be called
   * in window mode. Both dates must be non-null. The effective date must be
   * before or equal to the expiration date. Both dates must be within the
   * period range of its branch.
   * @param effDate New effective date
   * @param expDate New expiration date
   */
  public void setEffectiveWindow(java.util.Date effDate, java.util.Date expDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setEffectiveWindow(effDate, expDate);
  }
  
  /**
   * The date on which this cost expires.  This is simply another accessor to {@link entity.EffDated#setExpirationDate(Date)}.
   * @param expDate the expiration date to be set
   */
  public void setExpDate(java.util.Date expDate) {
    ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).setExpDate(expDate);
  }
  
  /**
   * Change when the expiration date of this bean. You cannot change the
   * expiration date when in slice mode UNLESS the bean is new to its branch and
   * you're not setting the expiration date to the effective date (zero width).
   * In window mode there are no restrictions.
   * <p/>
   * The expiration date must be non-null. It must also come on or after the
   * effective date and within the period range of its branch.
   * @param expDate New expiration date
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setExpirationDate(java.util.Date expDate) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).setExpirationDate(expDate);
  }
  
  /**
   * Sets the value of the FXRateConversionUsed field.
   */
  private void setFXRateConversionUsed(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(FXRATECONVERSIONUSED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Fixed field.
   */
  private void setFixed(entity.BACost value) {
    __getInternalInterface().setFieldValue(FIXED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FrozenSet field.
   */
  public void setFrozenSet(entity.FrozenSet value) {
    __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Jurisdiction field.
   */
  public void setJurisdiction(entity.BAJurisdiction value) {
    __getInternalInterface().setFieldValue(JURISDICTION_PROP.get(), value);
  }
  
  /**
   * Set a foreign key by passing in an EFfDatedKey (effectively the
   * EffDatedVersionList or FixedId of the bean). You need this method because
   * it's the only way to set a foreign key given a FixedId (and no context for
   * when that FixeId might be effective).
   * <p/>
   * This bean can be unsliced or sliced when this is called.
   * @param link Effective dated foreign key to set
   * @param key EffDatedKey of the bean (effectively the EffDatedVersionList or
   *             FixedId of the bean)
   */
  public void setLinkVersionList(gw.entity.ILinkPropertyInfo link, gw.pl.persistence.core.effdate.EffDatedKey key) {
    ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedBasePublicMethods")).setLinkVersionList(link, key);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
  }
  
  /**
   * Sets the value of the NumDaysInRatedTerm field.
   */
  public void setNumDaysInRatedTerm(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NUMDAYSINRATEDTERM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Overridable field.
   */
  public void setOverridable(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(OVERRIDABLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideAdjRate field.
   */
  public void setOverrideAdjRate(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(OVERRIDEADJRATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideAmount field.
   */
  public void setOverrideAmount(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(OVERRIDEAMOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideAmountBilling field.
   */
  public void setOverrideAmountBilling(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(OVERRIDEAMOUNTBILLING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideAmountBilling_amt field.
   */
  private void setOverrideAmountBilling_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(OVERRIDEAMOUNTBILLING_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideAmountBilling_cur field.
   */
  private void setOverrideAmountBilling_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(OVERRIDEAMOUNTBILLING_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideAmount_amt field.
   */
  private void setOverrideAmount_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(OVERRIDEAMOUNT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideAmount_cur field.
   */
  private void setOverrideAmount_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(OVERRIDEAMOUNT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideBaseRate field.
   */
  public void setOverrideBaseRate(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(OVERRIDEBASERATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideReason field.
   */
  public void setOverrideReason(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OVERRIDEREASON_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideSource field.
   */
  public void setOverrideSource(typekey.OverrideSourceType value) {
    __getInternalInterface().setFieldValue(OVERRIDESOURCE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideTermAmount field.
   */
  public void setOverrideTermAmount(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(OVERRIDETERMAMOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideTermAmountBilling field.
   */
  public void setOverrideTermAmountBilling(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(OVERRIDETERMAMOUNTBILLING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideTermAmountBilling_amt field.
   */
  private void setOverrideTermAmountBilling_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(OVERRIDETERMAMOUNTBILLING_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideTermAmountBilling_cur field.
   */
  private void setOverrideTermAmountBilling_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(OVERRIDETERMAMOUNTBILLING_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideTermAmount_amt field.
   */
  private void setOverrideTermAmount_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(OVERRIDETERMAMOUNT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OverrideTermAmount_cur field.
   */
  private void setOverrideTermAmount_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(OVERRIDETERMAMOUNT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyFXRate field.
   * @param value 
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPolicyFXRate(entity.PolicyFXRate value) {
    ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).setPolicyFXRate(value);
  }
  
  /**
   * Sets the value of the ProrationMethod field.
   */
  public void setProrationMethod(typekey.ProrationMethod value) {
    __getInternalInterface().setFieldValue(PRORATIONMETHOD_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RateAmountType field.
   */
  public void setRateAmountType(typekey.RateAmountType value) {
    __getInternalInterface().setFieldValue(RATEAMOUNTTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RateBook field.
   */
  public void setRateBook(entity.RateBook value) {
    __getInternalInterface().setFieldValue(RATEBOOK_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RatedOrder field.
   */
  public void setRatedOrder(typekey.BARatedOrderType value) {
    __getInternalInterface().setFieldValue(RATEDORDER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RoundingLevel field.
   */
  public void setRoundingLevel(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(ROUNDINGLEVEL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RoundingMode field.
   */
  public void setRoundingMode(typekey.RoundingModeType value) {
    __getInternalInterface().setFieldValue(ROUNDINGMODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StandardAdjRate field.
   */
  public void setStandardAdjRate(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(STANDARDADJRATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StandardAmount field.
   */
  public void setStandardAmount(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(STANDARDAMOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StandardAmountBilling field.
   */
  public void setStandardAmountBilling(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(STANDARDAMOUNTBILLING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StandardAmountBilling_amt field.
   */
  private void setStandardAmountBilling_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(STANDARDAMOUNTBILLING_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StandardAmountBilling_cur field.
   */
  private void setStandardAmountBilling_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(STANDARDAMOUNTBILLING_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StandardAmount_amt field.
   */
  private void setStandardAmount_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(STANDARDAMOUNT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StandardAmount_cur field.
   */
  private void setStandardAmount_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(STANDARDAMOUNT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StandardBaseRate field.
   */
  public void setStandardBaseRate(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(STANDARDBASERATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StandardTermAmount field.
   */
  public void setStandardTermAmount(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(STANDARDTERMAMOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StandardTermAmountBilling field.
   */
  public void setStandardTermAmountBilling(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(STANDARDTERMAMOUNTBILLING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StandardTermAmountBilling_amt field.
   */
  private void setStandardTermAmountBilling_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(STANDARDTERMAMOUNTBILLING_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StandardTermAmountBilling_cur field.
   */
  private void setStandardTermAmountBilling_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(STANDARDTERMAMOUNTBILLING_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StandardTermAmount_amt field.
   */
  private void setStandardTermAmount_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(STANDARDTERMAMOUNT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the StandardTermAmount_cur field.
   */
  private void setStandardTermAmount_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(STANDARDTERMAMOUNT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SubjectToReporting field.
   */
  public void setSubjectToReporting(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(SUBJECTTOREPORTING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.BACost value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Transactions field.
   */
  private void setTransactions(entity.BATransaction[] value) {
    __getInternalInterface().setFieldValue(TRANSACTIONS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateTime field.
   */
  private void setUpdateTime(java.util.Date value) {
    __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UpdateUser field.
   */
  private void setUpdateUser(entity.User value) {
    __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
  }
  
  public entity.BACost split(java.util.Date splitDate) {
    return (entity.BACost)splitUntyped(splitDate);
  }
  
  /**
   * Split this bean at the given date. A bean can only be split in window mode.
   * Splitting creates a new bean (and row) with the same FixedId as this bean
   * which is effective from the original effective date of this bean to the
   * split date. We then move the effective date of this bean up to the split
   * date. The result is two beans: one effective from the original effective
   * date to the split date, the other effective from the split date to the
   * original expiration date. "This" bean is the later in that range, and the
   * bean returned from calling this method is the former in that range.
   * <p/>
   * If this bean's effective date equals the split date then no split will
   * occur. The split date must be within the effective range of this bean or an
   * exception is thrown.
   * @param splitDate Date on which to split this bean.
   * @return A new bean effective from the original effective date to the split
   *         date or this bean if no split occurred (see above).
   */
  public entity.EffDated splitUntyped(java.util.Date splitDate) {
    return ((com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.effdate.EffDatedPublicMethods")).splitUntyped(splitDate);
  }
  
  /**
   * Set's the version of the bean to the next value (i.e. the bean version original value+1)
   * Multiple calls to this method on the same bean will result in the same value being used
   * for the version (i.e. it is idempotent).
   * 
   * Calling this method will force the bean to be written to the database and participate fully
   * in the commit cycle e.g. pre-update rules will be run, etc.
   */
  public void touch() {
    ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).touch();
  }
  
  /**
   * Given, the term amount, term effective period, and the current effective period, updates the current
   * amount, the transaction amount and the transaction effective period.
   * @param roundingLevel the rounding level used when prorating the term amount to the current amount.
   *                      See {@link RoundingMode#HALF_UP} for more details.
   */
  public void updateAmount(java.math.RoundingMode roundingLevel) {
    ((com.guidewire.pc.domain.financials.CostPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.financials.CostPublicMethods")).updateAmount(roundingLevel);
  }
  
  static {
    com.guidewire._generated.entity.BACostInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.BACost, com.guidewire._generated.entity.BACostInternal>() {
      public java.lang.Object getImplementation(entity.BACost bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.BACostInternal getInternalInterface(entity.BACost bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}