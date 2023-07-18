package entity;

/**
 * BOPCededPremiumTransaction
 * A BusinessOwners implementation of the RICededPremiumTransaction delegate
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPCededPremiumTransaction.eti;BOPCededPremiumTransaction.eix;BOPCededPremiumTransaction.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "BOPCededPremiumTransaction")
public class BOPCededPremiumTransaction extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.RICededPremiumTransaction, entity.FrozenSetMember, gw.api.reinsurance.RICededPremiumTxnAdapter {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.BOPCededPremiumTransaction> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.BOPCededPremiumTransaction>("entity.BOPCededPremiumTransaction");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> AGREEMENT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Agreement");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BOPCEDEDPREMIUM_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BOPCededPremium");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BOPCEDEDPREMIUMHISTORY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BOPCededPremiumHistory");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> BASISGNP_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "BasisGNP");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BASISGNP_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BasisGNP_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> BASISGNP_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "BasisGNP_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CALCTIMESTAMP_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CalcTimestamp");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CALCULATIONORDER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CalculationOrder");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> CEDEDPREMIUM_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "CededPremium");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> CEDEDPREMIUMMARKUP_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "CededPremiumMarkup");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEDPREMIUMMARKUP_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CededPremiumMarkup_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CEDEDPREMIUMMARKUP_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "CededPremiumMarkup_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEDPREMIUM_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CededPremium_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CEDEDPREMIUM_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "CededPremium_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> CEDEDRISKAMOUNT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "CededRiskAmount");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDEDRISKAMOUNT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CededRiskAmount_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> CEDEDRISKAMOUNT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "CededRiskAmount_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CEDINGRATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CedingRate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> COMMISSION_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "Commission");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMMISSIONRATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CommissionRate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> COMMISSION_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Commission_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> COMMISSION_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Commission_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEPOSTED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DatePosted");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DATEWRITTEN_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DateWritten");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EXPIRATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ExpirationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MARKUPRATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "MarkupRate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYFXRATE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyFXRate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PROGRAM_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Program");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.BOPCededPremiumTransactionInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public BOPCededPremiumTransaction()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public BOPCededPremiumTransaction(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected BOPCededPremiumTransaction(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.BOPCededPremiumTransactionInternal __createInternalInterface() {
    return new _Internal();
  }
  
  protected final com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
    if(_delegateManager == null) {
      _delegateManager  =  com.guidewire.pl.persistence.code.DelegateLoader.newInstance(this, __getDelegateMap());
    };
    return _delegateManager;
  }
  
  protected com.guidewire.pl.persistence.code.DelegateMap __getDelegateMap() {
    return DELEGATE_MAP;
  }
  
  protected com.guidewire._generated.entity.BOPCededPremiumTransactionInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Gets the value of the Agreement field.
   * The agreement being ceded to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIAgreement getAgreement() {
    return (entity.RIAgreement)__getInternalInterface().getFieldValue(AGREEMENT_PROP.get());
  }
  
  /**
   * not sure this should use the agreement currency
   * @return the currency associated with the agreement
   */
  public typekey.Currency getAgreementCurrency() {
    return ((com.guidewire.pc.domain.reinsurance.RICededPremiumTransactionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RICededPremiumTransactionPublicMethods")).getAgreementCurrency();
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
  
  /**
   * Gets the value of the BOPCededPremium field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPCededPremium getBOPCededPremium() {
    return (entity.BOPCededPremium)__getInternalInterface().getFieldValue(BOPCEDEDPREMIUM_PROP.get());
  }
  
  /**
   * Gets the value of the BOPCededPremiumHistory field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BOPCededPremiumHistory getBOPCededPremiumHistory() {
    return (entity.BOPCededPremiumHistory)__getInternalInterface().getFieldValue(BOPCEDEDPREMIUMHISTORY_PROP.get());
  }
  
  /**
   * Gets the value of the BasisGNP field.
   * The Gross Net Premium that was used for the purposes of this calculation.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getBasisGNP() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(BASISGNP_PROP.get());
  }
  
  /**
   * Gets the value of the BasisGNP_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getBasisGNP_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(BASISGNP_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the BasisGNP_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getBasisGNP_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(BASISGNP_CUR_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the CalcTimestamp field.
   * The date and time on which ceding calculation was done.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCalcTimestamp() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CALCTIMESTAMP_PROP.get());
  }
  
  /**
   * Gets the value of the CalculationOrder field.
   * The order of calculation, essentially for documentation purposes.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getCalculationOrder() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(CALCULATIONORDER_PROP.get());
  }
  
  /**
   * Gets the value of the CededPremium field.
   * The amount of premium to cede to the agreement for effective time [EffDate, ExpDate). This value can be negative, as in the case of an offset (certainly) but also in some cases where so much was ceded to prior treaties that what is left is a negative amount.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getCededPremium() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(CEDEDPREMIUM_PROP.get());
  }
  
  /**
   * Gets the value of the CededPremiumMarkup field.
   * The amount of markup to the agreement for effective time [EffDate, ExpDate). This value can be negative, for the same reasons that CededPremium can be. Normally their signs will match, and the net owed to the reinsurer is CededPremium - Commission.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getCededPremiumMarkup() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(CEDEDPREMIUMMARKUP_PROP.get());
  }
  
  /**
   * Gets the value of the CededPremiumMarkup_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCededPremiumMarkup_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(CEDEDPREMIUMMARKUP_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the CededPremiumMarkup_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCededPremiumMarkup_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(CEDEDPREMIUMMARKUP_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the CededPremium_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCededPremium_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(CEDEDPREMIUM_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the CededPremium_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCededPremium_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(CEDEDPREMIUM_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the CededRiskAmount field.
   * The amount of risk ceded to the agreement.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getCededRiskAmount() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(CEDEDRISKAMOUNT_PROP.get());
  }
  
  /**
   * Gets the value of the CededRiskAmount_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCededRiskAmount_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(CEDEDRISKAMOUNT_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the CededRiskAmount_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCededRiskAmount_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(CEDEDRISKAMOUNT_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the CedingRate field.
   * The ceding rate used for the calculation. The source of this value depends on the type of agreement. For a proportional agreement, this is the proportion of risk ceded to the agreement; for a non-proportional agreement it is the specified ceding rate. 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCedingRate() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(CEDINGRATE_PROP.get());
  }
  
  /**
   * Gets the value of the Commission field.
   * The amount of commission earned from the agreement for effective time [EffDate,ExpDate). This value can be negative, for the same reasons that CededPremium can be. Normally their signs will match, and the net owed to the reinsurer is CededPremium - Commission.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getCommission() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(COMMISSION_PROP.get());
  }
  
  /**
   * Gets the value of the CommissionRate field.
   * The rate used for the calculation of commission, denormalized from the agreement at the time this transaction was created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCommissionRate() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(COMMISSIONRATE_PROP.get());
  }
  
  /**
   * Gets the value of the Commission_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getCommission_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(COMMISSION_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the Commission_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getCommission_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(COMMISSION_CUR_PROP.get());
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
   * Gets the value of the DatePosted field.
   * The date the transaction was created
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDatePosted() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DATEPOSTED_PROP.get());
  }
  
  /**
   * Gets the value of the DateWritten field.
   * The date the ceding should be recognized for financial purposes.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDateWritten() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DATEWRITTEN_PROP.get());
  }
  
  /**
   * Gets the value of the EffectiveDate field.
   * Effective date of this row.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEffectiveDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EFFECTIVEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the ExpirationDate field.
   * Expiration date of this row or NULL in the database if this row never expires.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getExpirationDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EXPIRATIONDATE_PROP.get());
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
   * Gets the value of the MarkupRate field.
   * The rate used for the calculation of markup, denormalized from the (Fac) agreement at the time this transaction was created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getMarkupRate() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(MARKUPRATE_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyFXRate field.
   * The policy foreign exchange rate used to convert the ceded premium to the settlement currency.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyFXRate getPolicyFXRate() {
    return (entity.PolicyFXRate)__getInternalInterface().getFieldValue(POLICYFXRATE_PROP.get());
  }
  
  /**
   * Gets the value of the Program field.
   * The reinsurance program that applies to this premium
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RIProgram getProgram() {
    return (entity.RIProgram)__getInternalInterface().getFieldValue(PROGRAM_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  public entity.RICededPremium getRICededPremium() {
    return ((gw.api.reinsurance.RICededPremiumTxnAdapter)__getDelegateManager().getImplementation("gw.api.reinsurance.RICededPremiumTxnAdapter")).getRICededPremium();
  }
  
  public entity.RICededPremiumHistory getRICededPremiumHistory() {
    return ((gw.api.reinsurance.RICededPremiumTxnAdapter)__getDelegateManager().getImplementation("gw.api.reinsurance.RICededPremiumTxnAdapter")).getRICededPremiumHistory();
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
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
  
  /**
   * Returns true if this is effective for the given period.
   * @param start start of the period
   * @param end end of the period
   * @return true if effective window overlaps given dates, false otherwise
   */
  public boolean isEffective(java.util.Date start, java.util.Date end) {
    return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isEffective(start, end);
  }
  
  /**
   * Returns true if this is effective at the given date.
   * @param date the date to check
   * @return true if this is effective at given date, false otherwise
   */
  public boolean isEffectiveAt(java.util.Date date) {
    return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isEffectiveAt(date);
  }
  
  public boolean isFrozen() {
    return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
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
   * Returns true if the effective window of this overlaps with the effective window of other.
   * @param other the other eff dated
   * @return true if the effective windows of this and other overlap, false otherwise.
   */
  public boolean isOverlap(entity.SimpleEffDated other) {
    return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isOverlap(other);
  }
  
  /**
   * 
   * @return True if the object has been retired from active use, false if the
   *         object is active.  Retireable objects are never deleted from a
   *         database table, instead they are retired by setting the retired
   *         column to the same value as the ID of the object.
   */
  public java.lang.Boolean isRetired() {
    return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
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
   * Sets the value of the Agreement field.
   */
  public void setAgreement(entity.RIAgreement value) {
    __getInternalInterface().setFieldValue(AGREEMENT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BOPCededPremium field.
   */
  public void setBOPCededPremium(entity.BOPCededPremium value) {
    __getInternalInterface().setFieldValue(BOPCEDEDPREMIUM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BOPCededPremiumHistory field.
   */
  public void setBOPCededPremiumHistory(entity.BOPCededPremiumHistory value) {
    __getInternalInterface().setFieldValue(BOPCEDEDPREMIUMHISTORY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasisGNP field.
   */
  public void setBasisGNP(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(BASISGNP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasisGNP_amt field.
   */
  private void setBasisGNP_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(BASISGNP_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BasisGNP_cur field.
   */
  private void setBasisGNP_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(BASISGNP_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CalcTimestamp field.
   */
  public void setCalcTimestamp(java.util.Date value) {
    __getInternalInterface().setFieldValue(CALCTIMESTAMP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CalculationOrder field.
   */
  public void setCalculationOrder(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(CALCULATIONORDER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CededPremium field.
   */
  public void setCededPremium(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(CEDEDPREMIUM_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CededPremiumMarkup field.
   */
  public void setCededPremiumMarkup(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(CEDEDPREMIUMMARKUP_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CededPremiumMarkup_amt field.
   */
  private void setCededPremiumMarkup_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(CEDEDPREMIUMMARKUP_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CededPremiumMarkup_cur field.
   */
  private void setCededPremiumMarkup_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(CEDEDPREMIUMMARKUP_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CededPremium_amt field.
   */
  private void setCededPremium_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(CEDEDPREMIUM_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CededPremium_cur field.
   */
  private void setCededPremium_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(CEDEDPREMIUM_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CededRiskAmount field.
   */
  public void setCededRiskAmount(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(CEDEDRISKAMOUNT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CededRiskAmount_amt field.
   */
  private void setCededRiskAmount_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(CEDEDRISKAMOUNT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CededRiskAmount_cur field.
   */
  private void setCededRiskAmount_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(CEDEDRISKAMOUNT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CedingRate field.
   */
  public void setCedingRate(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(CEDINGRATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Commission field.
   */
  public void setCommission(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(COMMISSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CommissionRate field.
   */
  public void setCommissionRate(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(COMMISSIONRATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Commission_amt field.
   */
  private void setCommission_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(COMMISSION_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Commission_cur field.
   */
  private void setCommission_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(COMMISSION_CUR_PROP.get(), value);
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
   * Sets the value of the DatePosted field.
   */
  public void setDatePosted(java.util.Date value) {
    __getInternalInterface().setFieldValue(DATEPOSTED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DateWritten field.
   */
  public void setDateWritten(java.util.Date value) {
    __getInternalInterface().setFieldValue(DATEWRITTEN_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EffectiveDate field.
   */
  public void setEffectiveDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EFFECTIVEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ExpirationDate field.
   */
  public void setExpirationDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EXPIRATIONDATE_PROP.get(), value);
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
   * Sets the value of the MarkupRate field.
   */
  public void setMarkupRate(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(MARKUPRATE_PROP.get(), value);
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
   * Sets the value of the PolicyFXRate field.
   */
  public void setPolicyFXRate(entity.PolicyFXRate value) {
    __getInternalInterface().setFieldValue(POLICYFXRATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Program field.
   */
  public void setProgram(entity.RIProgram value) {
    __getInternalInterface().setFieldValue(PROGRAM_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.BOPCededPremiumTransactionInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.BOPCededPremiumTransaction.this.__getDelegateManager();
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public java.lang.Integer calculateNextVersion() {
      return ((com.guidewire.pl.domain.persistence.core.impl.VersionableInternal)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal")).calculateNextVersion();
    }
    
    public java.util.List<entity.KeyableBean> cascadeDelete() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cascadeDelete();
    }
    
    public entity.KeyableBean cloneBeanForBundleTransfer() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).cloneBeanForBundleTransfer();
    }
    
    /**
     * 
     * @return A copy of the current bean and a deep copy of all owned array elements
     */
    public entity.KeyableBean copy() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
    }
    
    public entity.KeyableBean downcast(gw.entity.IEntityType newSubtype) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).downcast(newSubtype);
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateInsertEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateInsertEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateRemoveEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateRemoveEventsInternal();
    }
    
    public java.util.List<com.guidewire.pl.system.integration.messaging.events.EventDescriptor> generateUpdateEventsInternal() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).generateUpdateEventsInternal();
    }
    
    /**
     * Gets the value of the Agreement field.
     * The agreement being ceded to
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RIAgreement getAgreement() {
      return (entity.RIAgreement)__getInternalInterface().getFieldValue(AGREEMENT_PROP.get());
    }
    
    /**
     * not sure this should use the agreement currency
     * @return the currency associated with the agreement
     */
    public typekey.Currency getAgreementCurrency() {
      return ((com.guidewire.pc.domain.reinsurance.RICededPremiumTransactionPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.reinsurance.RICededPremiumTransactionPublicMethods")).getAgreementCurrency();
    }
    
    public gw.pl.persistence.core.Key getAgreementID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(AGREEMENT_PROP.get());
    }
    
    /**
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
    }
    
    /**
     * Gets the value of the BOPCededPremium field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BOPCededPremium getBOPCededPremium() {
      return (entity.BOPCededPremium)__getInternalInterface().getFieldValue(BOPCEDEDPREMIUM_PROP.get());
    }
    
    /**
     * Gets the value of the BOPCededPremiumHistory field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.BOPCededPremiumHistory getBOPCededPremiumHistory() {
      return (entity.BOPCededPremiumHistory)__getInternalInterface().getFieldValue(BOPCEDEDPREMIUMHISTORY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBOPCededPremiumHistoryID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BOPCEDEDPREMIUMHISTORY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBOPCededPremiumID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BOPCEDEDPREMIUM_PROP.get());
    }
    
    /**
     * Gets the value of the BasisGNP field.
     * The Gross Net Premium that was used for the purposes of this calculation.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getBasisGNP() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(BASISGNP_PROP.get());
    }
    
    /**
     * Gets the value of the BasisGNP_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getBasisGNP_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(BASISGNP_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the BasisGNP_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getBasisGNP_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(BASISGNP_CUR_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the CalcTimestamp field.
     * The date and time on which ceding calculation was done.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCalcTimestamp() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CALCTIMESTAMP_PROP.get());
    }
    
    /**
     * Gets the value of the CalculationOrder field.
     * The order of calculation, essentially for documentation purposes.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getCalculationOrder() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(CALCULATIONORDER_PROP.get());
    }
    
    /**
     * Gets the value of the CededPremium field.
     * The amount of premium to cede to the agreement for effective time [EffDate, ExpDate). This value can be negative, as in the case of an offset (certainly) but also in some cases where so much was ceded to prior treaties that what is left is a negative amount.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getCededPremium() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(CEDEDPREMIUM_PROP.get());
    }
    
    /**
     * Gets the value of the CededPremiumMarkup field.
     * The amount of markup to the agreement for effective time [EffDate, ExpDate). This value can be negative, for the same reasons that CededPremium can be. Normally their signs will match, and the net owed to the reinsurer is CededPremium - Commission.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getCededPremiumMarkup() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(CEDEDPREMIUMMARKUP_PROP.get());
    }
    
    /**
     * Gets the value of the CededPremiumMarkup_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getCededPremiumMarkup_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(CEDEDPREMIUMMARKUP_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the CededPremiumMarkup_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getCededPremiumMarkup_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(CEDEDPREMIUMMARKUP_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the CededPremium_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getCededPremium_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(CEDEDPREMIUM_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the CededPremium_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getCededPremium_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(CEDEDPREMIUM_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the CededRiskAmount field.
     * The amount of risk ceded to the agreement.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getCededRiskAmount() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(CEDEDRISKAMOUNT_PROP.get());
    }
    
    /**
     * Gets the value of the CededRiskAmount_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getCededRiskAmount_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(CEDEDRISKAMOUNT_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the CededRiskAmount_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getCededRiskAmount_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(CEDEDRISKAMOUNT_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the CedingRate field.
     * The ceding rate used for the calculation. The source of this value depends on the type of agreement. For a proportional agreement, this is the proportion of risk ceded to the agreement; for a non-proportional agreement it is the specified ceding rate. 
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getCedingRate() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(CEDINGRATE_PROP.get());
    }
    
    /**
     * Gets the value of the Commission field.
     * The amount of commission earned from the agreement for effective time [EffDate,ExpDate). This value can be negative, for the same reasons that CededPremium can be. Normally their signs will match, and the net owed to the reinsurer is CededPremium - Commission.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getCommission() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(COMMISSION_PROP.get());
    }
    
    /**
     * Gets the value of the CommissionRate field.
     * The rate used for the calculation of commission, denormalized from the agreement at the time this transaction was created.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getCommissionRate() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(COMMISSIONRATE_PROP.get());
    }
    
    /**
     * Gets the value of the Commission_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getCommission_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(COMMISSION_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the Commission_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getCommission_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(COMMISSION_CUR_PROP.get());
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
    
    public gw.pl.persistence.core.Key getCreateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(CREATEUSER_PROP.get());
    }
    
    /**
     * Gets the value of the DatePosted field.
     * The date the transaction was created
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDatePosted() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DATEPOSTED_PROP.get());
    }
    
    /**
     * Gets the value of the DateWritten field.
     * The date the ceding should be recognized for financial purposes.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDateWritten() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DATEWRITTEN_PROP.get());
    }
    
    /**
     * Gets the value of the EffectiveDate field.
     * Effective date of this row.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEffectiveDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EFFECTIVEDATE_PROP.get());
    }
    
    /**
     * Gets the value of the ExpirationDate field.
     * Expiration date of this row or NULL in the database if this row never expires.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getExpirationDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EXPIRATIONDATE_PROP.get());
    }
    
    /**
     * Gets the value of the FrozenSet field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.FrozenSet getFrozenSet() {
      return (entity.FrozenSet)__getInternalInterface().getFieldValue(FROZENSET_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getFrozenSetID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(FROZENSET_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the MarkupRate field.
     * The rate used for the calculation of markup, denormalized from the (Fac) agreement at the time this transaction was created.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getMarkupRate() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(MARKUPRATE_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyFXRate field.
     * The policy foreign exchange rate used to convert the ceded premium to the settlement currency.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyFXRate getPolicyFXRate() {
      return (entity.PolicyFXRate)__getInternalInterface().getFieldValue(POLICYFXRATE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyFXRateID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICYFXRATE_PROP.get());
    }
    
    /**
     * Gets the value of the Program field.
     * The reinsurance program that applies to this premium
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RIProgram getProgram() {
      return (entity.RIProgram)__getInternalInterface().getFieldValue(PROGRAM_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getProgramID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PROGRAM_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    public entity.RICededPremium getRICededPremium() {
      return ((gw.api.reinsurance.RICededPremiumTxnAdapter)__getDelegateManager().getImplementation("gw.api.reinsurance.RICededPremiumTxnAdapter")).getRICededPremium();
    }
    
    public entity.RICededPremiumHistory getRICededPremiumHistory() {
      return ((gw.api.reinsurance.RICededPremiumTxnAdapter)__getDelegateManager().getImplementation("gw.api.reinsurance.RICededPremiumTxnAdapter")).getRICededPremiumHistory();
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
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
    
    public gw.pl.persistence.core.Key getUpdateUserID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(UPDATEUSER_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
    }
    
    /**
     * Returns true if this is effective for the given period.
     * @param start start of the period
     * @param end end of the period
     * @return true if effective window overlaps given dates, false otherwise
     */
    public boolean isEffective(java.util.Date start, java.util.Date end) {
      return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isEffective(start, end);
    }
    
    /**
     * Returns true if this is effective at the given date.
     * @param date the date to check
     * @return true if this is effective at given date, false otherwise
     */
    public boolean isEffectiveAt(java.util.Date date) {
      return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isEffectiveAt(date);
    }
    
    public boolean isFrozen() {
      return ((com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods")).isFrozen();
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
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
    }
    
    /**
     * Returns true if the effective window of this overlaps with the effective window of other.
     * @param other the other eff dated
     * @return true if the effective windows of this and other overlap, false otherwise.
     */
    public boolean isOverlap(entity.SimpleEffDated other) {
      return ((com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods")).isOverlap(other);
    }
    
    /**
     * 
     * @return True if the object has been retired from active use, false if the
     *         object is active.  Retireable objects are never deleted from a
     *         database table, instead they are retired by setting the retired
     *         column to the same value as the ID of the object.
     */
    public java.lang.Boolean isRetired() {
      return ((com.guidewire.pl.domain.persistence.core.RetireablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods")).isRetired();
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    public void putInBundle() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).putInBundle();
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
    
    public entity.KeyableBean reload(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).reload(bundle);
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
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the Agreement field.
     */
    public void setAgreement(entity.RIAgreement value) {
      __getInternalInterface().setFieldValue(AGREEMENT_PROP.get(), value);
    }
    
    public void setAgreementID(gw.pl.persistence.core.Key value) {
      setFieldValue(AGREEMENT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BOPCededPremium field.
     */
    public void setBOPCededPremium(entity.BOPCededPremium value) {
      __getInternalInterface().setFieldValue(BOPCEDEDPREMIUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BOPCededPremiumHistory field.
     */
    public void setBOPCededPremiumHistory(entity.BOPCededPremiumHistory value) {
      __getInternalInterface().setFieldValue(BOPCEDEDPREMIUMHISTORY_PROP.get(), value);
    }
    
    public void setBOPCededPremiumHistoryID(gw.pl.persistence.core.Key value) {
      setFieldValue(BOPCEDEDPREMIUMHISTORY_PROP.get(), value);
    }
    
    public void setBOPCededPremiumID(gw.pl.persistence.core.Key value) {
      setFieldValue(BOPCEDEDPREMIUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BasisGNP field.
     */
    public void setBasisGNP(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(BASISGNP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BasisGNP_amt field.
     */
    public void setBasisGNP_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(BASISGNP_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BasisGNP_cur field.
     */
    public void setBasisGNP_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(BASISGNP_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CalcTimestamp field.
     */
    public void setCalcTimestamp(java.util.Date value) {
      __getInternalInterface().setFieldValue(CALCTIMESTAMP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CalculationOrder field.
     */
    public void setCalculationOrder(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(CALCULATIONORDER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CededPremium field.
     */
    public void setCededPremium(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(CEDEDPREMIUM_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CededPremiumMarkup field.
     */
    public void setCededPremiumMarkup(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(CEDEDPREMIUMMARKUP_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CededPremiumMarkup_amt field.
     */
    public void setCededPremiumMarkup_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(CEDEDPREMIUMMARKUP_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CededPremiumMarkup_cur field.
     */
    public void setCededPremiumMarkup_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(CEDEDPREMIUMMARKUP_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CededPremium_amt field.
     */
    public void setCededPremium_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(CEDEDPREMIUM_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CededPremium_cur field.
     */
    public void setCededPremium_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(CEDEDPREMIUM_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CededRiskAmount field.
     */
    public void setCededRiskAmount(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(CEDEDRISKAMOUNT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CededRiskAmount_amt field.
     */
    public void setCededRiskAmount_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(CEDEDRISKAMOUNT_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CededRiskAmount_cur field.
     */
    public void setCededRiskAmount_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(CEDEDRISKAMOUNT_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CedingRate field.
     */
    public void setCedingRate(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(CEDINGRATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Commission field.
     */
    public void setCommission(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(COMMISSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CommissionRate field.
     */
    public void setCommissionRate(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(COMMISSIONRATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Commission_amt field.
     */
    public void setCommission_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(COMMISSION_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Commission_cur field.
     */
    public void setCommission_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(COMMISSION_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateTime field.
     */
    public void setCreateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(CREATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CreateUser field.
     */
    public void setCreateUser(entity.User value) {
      __getInternalInterface().setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    public void setCreateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(CREATEUSER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DatePosted field.
     */
    public void setDatePosted(java.util.Date value) {
      __getInternalInterface().setFieldValue(DATEPOSTED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DateWritten field.
     */
    public void setDateWritten(java.util.Date value) {
      __getInternalInterface().setFieldValue(DATEWRITTEN_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EffectiveDate field.
     */
    public void setEffectiveDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EFFECTIVEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ExpirationDate field.
     */
    public void setExpirationDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EXPIRATIONDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FrozenSet field.
     */
    public void setFrozenSet(entity.FrozenSet value) {
      __getInternalInterface().setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    public void setFrozenSetID(gw.pl.persistence.core.Key value) {
      setFieldValue(FROZENSET_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the MarkupRate field.
     */
    public void setMarkupRate(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(MARKUPRATE_PROP.get(), value);
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
     * Sets the value of the PolicyFXRate field.
     */
    public void setPolicyFXRate(entity.PolicyFXRate value) {
      __getInternalInterface().setFieldValue(POLICYFXRATE_PROP.get(), value);
    }
    
    public void setPolicyFXRateID(gw.pl.persistence.core.Key value) {
      setFieldValue(POLICYFXRATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Program field.
     */
    public void setProgram(entity.RIProgram value) {
      __getInternalInterface().setFieldValue(PROGRAM_PROP.get(), value);
    }
    
    public void setProgramID(gw.pl.persistence.core.Key value) {
      setFieldValue(PROGRAM_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    public void setRetired() {
      ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).setRetired();
    }
    
    /**
     * Sets the value of the RetiredValue field.
     */
    public void setRetiredValue(java.lang.Long value) {
      __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateTime field.
     */
    public void setUpdateTime(java.util.Date value) {
      __getInternalInterface().setFieldValue(UPDATETIME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UpdateUser field.
     */
    public void setUpdateUser(entity.User value) {
      __getInternalInterface().setFieldValue(UPDATEUSER_PROP.get(), value);
    }
    
    public void setUpdateUserID(gw.pl.persistence.core.Key value) {
      setFieldValue(UPDATEUSER_PROP.get(), value);
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
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pc.domain.product.SimpleEffDatedPublicMethods", "com.guidewire.pc.domain.product.impl.SimpleEffDatedImpl");
    config.put("com.guidewire.pc.domain.reinsurance.RICededPremiumTransactionPublicMethods", "com.guidewire.pc.domain.reinsurance.impl.RICededPremiumTransactionImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("gw.api.reinsurance.RICededPremiumTxnAdapter", "gw.reinsurance.ceding.BOPCededPremiumTransactionAdapter");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.BOPCededPremiumTransaction.class, config);
    com.guidewire._generated.entity.BOPCededPremiumTransactionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.BOPCededPremiumTransaction, com.guidewire._generated.entity.BOPCededPremiumTransactionInternal>() {
      public java.lang.Object getImplementation(entity.BOPCededPremiumTransaction bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.BOPCededPremiumTransactionInternal getInternalInterface(entity.BOPCededPremiumTransaction bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.BOPCededPremiumTransaction newEmptyInstance() {
        return new entity.BOPCededPremiumTransaction((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}