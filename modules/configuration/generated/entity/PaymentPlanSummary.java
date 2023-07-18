package entity;

/**
 * PaymentPlanSummary
 * Payment plan summary info from billing system
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PaymentPlanSummary.eti;PaymentPlanSummary.eix;PaymentPlanSummary.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "PaymentPlanSummary")
public class PaymentPlanSummary extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.Extractable, entity.FrozenSetMember {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PaymentPlanSummary> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PaymentPlanSummary>("entity.PaymentPlanSummary");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> BILLDATEORDUEDATEBILLING_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "BillDateOrDueDateBilling");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BILLINGID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BillingId");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> DOWNPAYMENT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "DownPayment");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DOWNPAYMENT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DownPayment_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> DOWNPAYMENT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "DownPayment_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> FEE_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "Fee");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FEE_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Fee_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> FEE_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Fee_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> INSTALLMENT_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "Installment");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INSTALLMENT_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Installment_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> INSTALLMENT_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Installment_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> INVOICEFREQUENCY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "InvoiceFrequency");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Name");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NOTES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Notes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PAYMENTMETHODSINTERNAL_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "PaymentMethodsInternal");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PAYMENTPLANTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PaymentPlanType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYPERIOD_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyPeriod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REPORTINGPATTERNCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReportingPatternCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TAX_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "Tax");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TAX_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Tax_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TAX_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Tax_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TOTAL_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "Total");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> TOTALFEES_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "TotalFees");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTALFEES_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TotalFees_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOTALFEES_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "TotalFees_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TOTAL_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Total_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> TOTAL_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Total_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.PaymentPlanSummaryInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public PaymentPlanSummary()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public PaymentPlanSummary(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected PaymentPlanSummary(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.PaymentPlanSummaryInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.PaymentPlanSummaryInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  public void addAllowedPaymentMethods(java.util.List<typekey.AccountPaymentMethod> paymentMethods) {
    ((com.guidewire.pc.domain.billing.PaymentPlanSummaryPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.billing.PaymentPlanSummaryPublicMethods")).addAllowedPaymentMethods(paymentMethods);
  }
  
  /**
   * Adds the given element to the PaymentMethodsInternal array. This is achieved by setting the parent foreign key to this entity instance.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void addToPaymentMethodsInternal(entity.AllowedPaymentMethod element) {
    __getInternalInterface().addArrayElement(PAYMENTMETHODSINTERNAL_PROP.get(), element);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * 
   * @return the list of supported payment methods
   */
  public java.util.List<typekey.AccountPaymentMethod> getAllowedPaymentMethods() {
    return ((com.guidewire.pc.domain.billing.PaymentPlanSummaryPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.billing.PaymentPlanSummaryPublicMethods")).getAllowedPaymentMethods();
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
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the BillDateOrDueDateBilling field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BillDateOrDueDateBilling getBillDateOrDueDateBilling() {
    return (typekey.BillDateOrDueDateBilling)__getInternalInterface().getFieldValue(BILLDATEORDUEDATEBILLING_PROP.get());
  }
  
  /**
   * Gets the value of the BillingId field.
   * Stores the billing system's Public ID for this Payment Plan
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBillingId() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BILLINGID_PROP.get());
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
   * Gets the value of the DownPayment field.
   * DownPayment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getDownPayment() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(DOWNPAYMENT_PROP.get());
  }
  
  /**
   * Gets the value of the DownPayment_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDownPayment_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DOWNPAYMENT_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the DownPayment_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getDownPayment_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(DOWNPAYMENT_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the Fee field.
   * The installment fee charged as part of this payment plan with respect to the parent PolicyPeriod.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getFee() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(FEE_PROP.get());
  }
  
  /**
   * Gets the value of the Fee_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getFee_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(FEE_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the Fee_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getFee_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(FEE_CUR_PROP.get());
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
   * Gets the value of the Installment field.
   * Installment
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getInstallment() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(INSTALLMENT_PROP.get());
  }
  
  /**
   * Gets the value of the Installment_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getInstallment_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(INSTALLMENT_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the Installment_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getInstallment_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(INSTALLMENT_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the InvoiceFrequency field.
   * The frequency of invoicing (weekly, every two weeks, monthly, etc.)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BillingPeriodicity getInvoiceFrequency() {
    return (typekey.BillingPeriodicity)__getInternalInterface().getFieldValue(INVOICEFREQUENCY_PROP.get());
  }
  
  /**
   * Gets the value of the Name field.
   * Name of this payment plan (only for Installments plans)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
  }
  
  /**
   * Gets the value of the Notes field.
   * Notes
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getNotes() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NOTES_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.AllowedPaymentMethod[] getPaymentMethodsInternal() {
    return (entity.AllowedPaymentMethod[])__getInternalInterface().getFieldValue(PAYMENTMETHODSINTERNAL_PROP.get());
  }
  
  /**
   * Gets the value of the PaymentPlanType field.
   * The type of this payment plan (typically either Installments or Reporting)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PaymentMethod getPaymentPlanType() {
    return (typekey.PaymentMethod)__getInternalInterface().getFieldValue(PAYMENTPLANTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyPeriod field.
   * Policy period where the plan summary resides
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyPeriod getPolicyPeriod() {
    return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(POLICYPERIOD_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the ReportingPatternCode field.
   * The code of the pattern to use for creating and scheduling premium reports
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getReportingPatternCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(REPORTINGPATTERNCODE_PROP.get());
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
   * Gets the value of the Tax field.
   * Tax charged as part of this payment plan with respect to the parent PolicyPeriod.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTax() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TAX_PROP.get());
  }
  
  /**
   * Gets the value of the Tax_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTax_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TAX_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the Tax_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTax_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TAX_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the Total field.
   * Total
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotal() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTAL_PROP.get());
  }
  
  /**
   * Gets the value of the TotalFees field.
   * The total fees charged as part of this payment plan with respect to the parent PolicyPeriod.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getTotalFees() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALFEES_PROP.get());
  }
  
  /**
   * Gets the value of the TotalFees_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotalFees_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALFEES_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the TotalFees_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotalFees_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALFEES_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the Total_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getTotal_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTAL_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the Total_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getTotal_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(TOTAL_CUR_PROP.get());
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
   * Removes the given element from the PaymentMethodsInternal array. This is achieved by marking the element for removal.
   * @deprecated This method is not intended to be available and will be removed in a future release.
   */
  @java.lang.Deprecated
  public void removeFromPaymentMethodsInternal(entity.AllowedPaymentMethod element) {
    __getInternalInterface().removeArrayElement(PAYMENTMETHODSINTERNAL_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the PaymentMethodsInternal array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromPaymentMethodsInternal(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(PAYMENTMETHODSINTERNAL_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BillDateOrDueDateBilling field.
   */
  public void setBillDateOrDueDateBilling(typekey.BillDateOrDueDateBilling value) {
    __getInternalInterface().setFieldValue(BILLDATEORDUEDATEBILLING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BillingId field.
   */
  public void setBillingId(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BILLINGID_PROP.get(), value);
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
   * Sets the value of the DownPayment field.
   */
  public void setDownPayment(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(DOWNPAYMENT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DownPayment_amt field.
   */
  private void setDownPayment_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(DOWNPAYMENT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DownPayment_cur field.
   */
  private void setDownPayment_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(DOWNPAYMENT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Fee field.
   */
  public void setFee(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(FEE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Fee_amt field.
   */
  private void setFee_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(FEE_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Fee_cur field.
   */
  private void setFee_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(FEE_CUR_PROP.get(), value);
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
   * Sets the value of the Installment field.
   */
  public void setInstallment(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(INSTALLMENT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Installment_amt field.
   */
  private void setInstallment_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(INSTALLMENT_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Installment_cur field.
   */
  private void setInstallment_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(INSTALLMENT_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InvoiceFrequency field.
   */
  public void setInvoiceFrequency(typekey.BillingPeriodicity value) {
    __getInternalInterface().setFieldValue(INVOICEFREQUENCY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Name field.
   */
  public void setName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
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
   * Sets the value of the Notes field.
   */
  public void setNotes(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(NOTES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PaymentMethodsInternal field.
   */
  private void setPaymentMethodsInternal(entity.AllowedPaymentMethod[] value) {
    __getInternalInterface().setFieldValue(PAYMENTMETHODSINTERNAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PaymentPlanType field.
   */
  public void setPaymentPlanType(typekey.PaymentMethod value) {
    __getInternalInterface().setFieldValue(PAYMENTPLANTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyPeriod field.
   */
  public void setPolicyPeriod(entity.PolicyPeriod value) {
    __getInternalInterface().setFieldValue(POLICYPERIOD_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the ReportingPatternCode field.
   */
  public void setReportingPatternCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(REPORTINGPATTERNCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Tax field.
   */
  public void setTax(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TAX_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Tax_amt field.
   */
  private void setTax_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TAX_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Tax_cur field.
   */
  private void setTax_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TAX_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Total field.
   */
  public void setTotal(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TOTAL_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalFees field.
   */
  public void setTotalFees(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(TOTALFEES_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalFees_amt field.
   */
  private void setTotalFees_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TOTALFEES_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the TotalFees_cur field.
   */
  private void setTotalFees_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TOTALFEES_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Total_amt field.
   */
  private void setTotal_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(TOTAL_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Total_cur field.
   */
  private void setTotal_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(TOTAL_CUR_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.PaymentPlanSummaryInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.PaymentPlanSummary.this.__getDelegateManager();
    }
    
    public void addAllowedPaymentMethods(java.util.List<typekey.AccountPaymentMethod> paymentMethods) {
      ((com.guidewire.pc.domain.billing.PaymentPlanSummaryPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.billing.PaymentPlanSummaryPublicMethods")).addAllowedPaymentMethods(paymentMethods);
    }
    
    /**
     * Adds the given element to the PaymentMethodsInternal array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToPaymentMethodsInternal(entity.AllowedPaymentMethod element) {
      __getInternalInterface().addArrayElement(PAYMENTMETHODSINTERNAL_PROP.get(), element);
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
     * 
     * @return the list of supported payment methods
     */
    public java.util.List<typekey.AccountPaymentMethod> getAllowedPaymentMethods() {
      return ((com.guidewire.pc.domain.billing.PaymentPlanSummaryPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.billing.PaymentPlanSummaryPublicMethods")).getAllowedPaymentMethods();
    }
    
    /**
     * Gets the value of the ArchivePartition field.
     * Unique number to partition the data so that the multiple workers can work independently
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getArchivePartition() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ARCHIVEPARTITION_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the BillDateOrDueDateBilling field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.BillDateOrDueDateBilling getBillDateOrDueDateBilling() {
      return (typekey.BillDateOrDueDateBilling)__getInternalInterface().getFieldValue(BILLDATEORDUEDATEBILLING_PROP.get());
    }
    
    /**
     * Gets the value of the BillingId field.
     * Stores the billing system's Public ID for this Payment Plan
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBillingId() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BILLINGID_PROP.get());
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
     * Gets the value of the DownPayment field.
     * DownPayment
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getDownPayment() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(DOWNPAYMENT_PROP.get());
    }
    
    /**
     * Gets the value of the DownPayment_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getDownPayment_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DOWNPAYMENT_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the DownPayment_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getDownPayment_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(DOWNPAYMENT_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the Fee field.
     * The installment fee charged as part of this payment plan with respect to the parent PolicyPeriod.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getFee() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(FEE_PROP.get());
    }
    
    /**
     * Gets the value of the Fee_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getFee_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(FEE_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the Fee_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getFee_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(FEE_CUR_PROP.get());
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
     * Gets the value of the Installment field.
     * Installment
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getInstallment() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(INSTALLMENT_PROP.get());
    }
    
    /**
     * Gets the value of the Installment_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getInstallment_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(INSTALLMENT_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the Installment_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getInstallment_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(INSTALLMENT_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the InvoiceFrequency field.
     * The frequency of invoicing (weekly, every two weeks, monthly, etc.)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.BillingPeriodicity getInvoiceFrequency() {
      return (typekey.BillingPeriodicity)__getInternalInterface().getFieldValue(INVOICEFREQUENCY_PROP.get());
    }
    
    /**
     * Gets the value of the Name field.
     * Name of this payment plan (only for Installments plans)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NAME_PROP.get());
    }
    
    /**
     * Gets the value of the Notes field.
     * Notes
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getNotes() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(NOTES_PROP.get());
    }
    
    /**
     * Gets the value of the PaymentMethodsInternal field.
     * The list of supported payment methods.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.AllowedPaymentMethod[] getPaymentMethodsInternal() {
      return (entity.AllowedPaymentMethod[])__getInternalInterface().getFieldValue(PAYMENTMETHODSINTERNAL_PROP.get());
    }
    
    /**
     * Gets the value of the PaymentPlanType field.
     * The type of this payment plan (typically either Installments or Reporting)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PaymentMethod getPaymentPlanType() {
      return (typekey.PaymentMethod)__getInternalInterface().getFieldValue(PAYMENTPLANTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyPeriod field.
     * Policy period where the plan summary resides
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyPeriod getPolicyPeriod() {
      return (entity.PolicyPeriod)__getInternalInterface().getFieldValue(POLICYPERIOD_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyPeriodID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICYPERIOD_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the ReportingPatternCode field.
     * The code of the pattern to use for creating and scheduling premium reports
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getReportingPatternCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(REPORTINGPATTERNCODE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the Tax field.
     * Tax charged as part of this payment plan with respect to the parent PolicyPeriod.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTax() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TAX_PROP.get());
    }
    
    /**
     * Gets the value of the Tax_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTax_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TAX_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the Tax_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTax_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TAX_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the Total field.
     * Total
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTotal() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTAL_PROP.get());
    }
    
    /**
     * Gets the value of the TotalFees field.
     * The total fees charged as part of this payment plan with respect to the parent PolicyPeriod.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getTotalFees() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(TOTALFEES_PROP.get());
    }
    
    /**
     * Gets the value of the TotalFees_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTotalFees_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTALFEES_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the TotalFees_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTotalFees_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TOTALFEES_CUR_PROP.get());
    }
    
    /**
     * Gets the value of the Total_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getTotal_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(TOTAL_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the Total_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getTotal_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(TOTAL_CUR_PROP.get());
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
    
    /**
     * Removes the given element from the PaymentMethodsInternal array. This is achieved by marking the element for removal.
     */
    public void removeFromPaymentMethodsInternal(entity.AllowedPaymentMethod element) {
      __getInternalInterface().removeArrayElement(PAYMENTMETHODSINTERNAL_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the PaymentMethodsInternal array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromPaymentMethodsInternal(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PAYMENTMETHODSINTERNAL_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BillDateOrDueDateBilling field.
     */
    public void setBillDateOrDueDateBilling(typekey.BillDateOrDueDateBilling value) {
      __getInternalInterface().setFieldValue(BILLDATEORDUEDATEBILLING_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BillingId field.
     */
    public void setBillingId(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BILLINGID_PROP.get(), value);
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
     * Sets the value of the DownPayment field.
     */
    public void setDownPayment(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(DOWNPAYMENT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DownPayment_amt field.
     */
    public void setDownPayment_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DOWNPAYMENT_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DownPayment_cur field.
     */
    public void setDownPayment_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(DOWNPAYMENT_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Fee field.
     */
    public void setFee(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(FEE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Fee_amt field.
     */
    public void setFee_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(FEE_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Fee_cur field.
     */
    public void setFee_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(FEE_CUR_PROP.get(), value);
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
    
    /**
     * Sets the value of the Installment field.
     */
    public void setInstallment(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(INSTALLMENT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Installment_amt field.
     */
    public void setInstallment_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(INSTALLMENT_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Installment_cur field.
     */
    public void setInstallment_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(INSTALLMENT_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InvoiceFrequency field.
     */
    public void setInvoiceFrequency(typekey.BillingPeriodicity value) {
      __getInternalInterface().setFieldValue(INVOICEFREQUENCY_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the Name field.
     */
    public void setName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NAME_PROP.get(), value);
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
     * Sets the value of the Notes field.
     */
    public void setNotes(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(NOTES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PaymentMethodsInternal field.
     */
    public void setPaymentMethodsInternal(entity.AllowedPaymentMethod[] value) {
      __getInternalInterface().setFieldValue(PAYMENTMETHODSINTERNAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PaymentPlanType field.
     */
    public void setPaymentPlanType(typekey.PaymentMethod value) {
      __getInternalInterface().setFieldValue(PAYMENTPLANTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyPeriod field.
     */
    public void setPolicyPeriod(entity.PolicyPeriod value) {
      __getInternalInterface().setFieldValue(POLICYPERIOD_PROP.get(), value);
    }
    
    public void setPolicyPeriodID(gw.pl.persistence.core.Key value) {
      setFieldValue(POLICYPERIOD_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the ReportingPatternCode field.
     */
    public void setReportingPatternCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(REPORTINGPATTERNCODE_PROP.get(), value);
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
     * Sets the value of the Tax field.
     */
    public void setTax(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TAX_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Tax_amt field.
     */
    public void setTax_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TAX_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Tax_cur field.
     */
    public void setTax_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TAX_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Total field.
     */
    public void setTotal(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TOTAL_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalFees field.
     */
    public void setTotalFees(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(TOTALFEES_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalFees_amt field.
     */
    public void setTotalFees_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TOTALFEES_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the TotalFees_cur field.
     */
    public void setTotalFees_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TOTALFEES_CUR_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Total_amt field.
     */
    public void setTotal_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(TOTAL_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Total_cur field.
     */
    public void setTotal_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(TOTAL_CUR_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.billing.PaymentPlanSummaryPublicMethods", "com.guidewire.pc.domain.billing.impl.PaymentPlanSummaryImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.RetireablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractEditableRetireableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractEditableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethods", "com.guidewire.pl.persistence.frozenset.FrozenSetMemberPublicMethodsImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.PaymentPlanSummary.class, config);
    com.guidewire._generated.entity.PaymentPlanSummaryInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.PaymentPlanSummary, com.guidewire._generated.entity.PaymentPlanSummaryInternal>() {
      public java.lang.Object getImplementation(entity.PaymentPlanSummary bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PaymentPlanSummaryInternal getInternalInterface(entity.PaymentPlanSummary bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.PaymentPlanSummary newEmptyInstance() {
        return new entity.PaymentPlanSummary((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}