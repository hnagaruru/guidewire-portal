package entity;

/**
 * BillingInvoiceStream
 * Billing invoice stream, used to set up a new policy term and does not need to be revisioned.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BillingInvoiceStream.eti;BillingInvoiceStream.eix;BillingInvoiceStream.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "BillingInvoiceStream")
public class BillingInvoiceStream extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.Extractable, entity.FrozenSetMember {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.BillingInvoiceStream> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.BillingInvoiceStream>("entity.BillingInvoiceStream");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> DAYOFWEEK_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "DayOfWeek");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DUEDATEBILLING_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DueDateBilling");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTANCHORDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstAnchorDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> FIRSTDAYOFMONTH_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "FirstDayOfMonth");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> INTERVAL_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Interval");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PAYMENTINSTRUMENTID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PaymentInstrumentID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> PAYMENTMETHOD_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PaymentMethod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYPERIOD_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyPeriod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SECONDANCHORDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SecondAnchorDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SECONDDAYOFMONTH_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SecondDayOfMonth");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UNAPPLIEDFUNDDESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UnappliedFundDescription");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UNAPPLIEDFUNDID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UnappliedFundID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.BillingInvoiceStreamInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public BillingInvoiceStream()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public BillingInvoiceStream(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected BillingInvoiceStream(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.BillingInvoiceStreamInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.BillingInvoiceStreamInternal __getInternalInterface() {
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
   * Gets the value of the DayOfWeek field.
   * For Every Week payment plans, this is the day of the week that the invoice should fall on.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.DayOfWeek getDayOfWeek() {
    return (typekey.DayOfWeek)__getInternalInterface().getFieldValue(DAYOFWEEK_PROP.get());
  }
  
  /**
   * Gets the value of the Description field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the FirstAnchorDate field.
   * A date that determines the invoicing day of month, day of week, etc.  This date should fall on the           desired invoicing day of month or day of week.           Invoices in the stream are billed (sent) DaysBeforeAnchorDatesForInvoiceBilling days before the invoicing           day of month, day of week, etc. that is specified by the anchor dates.           If the invoice payer chooses not to send invoices on a non-business day, the target bill (send) date will be           adjusted to be a business day, depending upon the payer's method of adjusting for business day.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getFirstAnchorDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(FIRSTANCHORDATE_PROP.get());
  }
  
  /**
   * Gets the value of the FirstDayOfMonth field.
   * First day (of two) of the month for twice-per-month invoicing.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getFirstDayOfMonth() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(FIRSTDAYOFMONTH_PROP.get());
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
   * Gets the value of the Interval field.
   * The Periodicity of Invoices in the stream -- Weekly, Monthly, Quarterly, etc.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.BillingPeriodicity getInterval() {
    return (typekey.BillingPeriodicity)__getInternalInterface().getFieldValue(INTERVAL_PROP.get());
  }
  
  /**
   * Gets the value of the PaymentInstrumentID field.
   * The Public ID of the payment instrument.  May be null.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPaymentInstrumentID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PAYMENTINSTRUMENTID_PROP.get());
  }
  
  /**
   * Gets the value of the PaymentMethod field.
   * Payment Method (e.g. Credit Card, Send Invoice...)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AccountPaymentMethod getPaymentMethod() {
    return (typekey.AccountPaymentMethod)__getInternalInterface().getFieldValue(PAYMENTMETHOD_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyPeriod field.
   * The associated policy period.
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
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getRetiredValue() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(RETIREDVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the SecondAnchorDate field.
   * A date that determines the second invoicing day for periodicities that need two anchor dates.           This determines the second invoicing day of month for twice-per-month BillingPeriodicity.  This date should fall on the           desired second invoicing day of month.  If the BillingPeriodicity is twice-per-month and the second anchor date is           not set, then the stream will invoice on the day determined by the FirstAnchorDate and one-half month from then.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getSecondAnchorDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(SECONDANCHORDATE_PROP.get());
  }
  
  /**
   * Gets the value of the SecondDayOfMonth field.
   * Second day (of two) of the month for twice-per-month invoicing.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSecondDayOfMonth() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(SECONDDAYOFMONTH_PROP.get());
  }
  
  /**
   * Gets the value of the UnappliedFundDescription field.
   * The description of a new unapplied fund for this invoice stream. Null if there is no new unapplied fund being created.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUnappliedFundDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(UNAPPLIEDFUNDDESCRIPTION_PROP.get());
  }
  
  /**
   * Gets the value of the UnappliedFundID field.
   * The Public ID of the existing unapplied fund which has been selected for this invoice stream. Null if there is no existing unapplied fund.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getUnappliedFundID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(UNAPPLIEDFUNDID_PROP.get());
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
   * Gets the value of the DueDateBilling field.
   * Whether or not the account's invoice date(s) are the date the invoice is sent or due.                 If false the date is the date the invoice is sent (EventDate),                 If true the date is the date the invoice is due (PaymentDueDate)
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDueDateBilling() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(DUEDATEBILLING_PROP.get());
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
   * Sets the value of the DayOfWeek field.
   */
  public void setDayOfWeek(typekey.DayOfWeek value) {
    __getInternalInterface().setFieldValue(DAYOFWEEK_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DueDateBilling field.
   */
  public void setDueDateBilling(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(DUEDATEBILLING_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstAnchorDate field.
   */
  public void setFirstAnchorDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(FIRSTANCHORDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstDayOfMonth field.
   */
  public void setFirstDayOfMonth(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(FIRSTDAYOFMONTH_PROP.get(), value);
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
   * Sets the value of the Interval field.
   */
  public void setInterval(typekey.BillingPeriodicity value) {
    __getInternalInterface().setFieldValue(INTERVAL_PROP.get(), value);
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
   * Sets the value of the PaymentInstrumentID field.
   */
  public void setPaymentInstrumentID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PAYMENTINSTRUMENTID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PaymentMethod field.
   */
  public void setPaymentMethod(typekey.AccountPaymentMethod value) {
    __getInternalInterface().setFieldValue(PAYMENTMETHOD_PROP.get(), value);
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
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SecondAnchorDate field.
   */
  public void setSecondAnchorDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(SECONDANCHORDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SecondDayOfMonth field.
   */
  public void setSecondDayOfMonth(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(SECONDDAYOFMONTH_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UnappliedFundDescription field.
   */
  public void setUnappliedFundDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(UNAPPLIEDFUNDDESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the UnappliedFundID field.
   */
  public void setUnappliedFundID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(UNAPPLIEDFUNDID_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.BillingInvoiceStreamInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.BillingInvoiceStream.this.__getDelegateManager();
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
     * Gets the value of the DayOfWeek field.
     * For Every Week payment plans, this is the day of the week that the invoice should fall on.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.DayOfWeek getDayOfWeek() {
      return (typekey.DayOfWeek)__getInternalInterface().getFieldValue(DAYOFWEEK_PROP.get());
    }
    
    /**
     * Gets the value of the Description field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the FirstAnchorDate field.
     * A date that determines the invoicing day of month, day of week, etc.  This date should fall on the           desired invoicing day of month or day of week.           Invoices in the stream are billed (sent) DaysBeforeAnchorDatesForInvoiceBilling days before the invoicing           day of month, day of week, etc. that is specified by the anchor dates.           If the invoice payer chooses not to send invoices on a non-business day, the target bill (send) date will be           adjusted to be a business day, depending upon the payer's method of adjusting for business day.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getFirstAnchorDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(FIRSTANCHORDATE_PROP.get());
    }
    
    /**
     * Gets the value of the FirstDayOfMonth field.
     * First day (of two) of the month for twice-per-month invoicing.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getFirstDayOfMonth() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(FIRSTDAYOFMONTH_PROP.get());
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
     * Gets the value of the Interval field.
     * The Periodicity of Invoices in the stream -- Weekly, Monthly, Quarterly, etc.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.BillingPeriodicity getInterval() {
      return (typekey.BillingPeriodicity)__getInternalInterface().getFieldValue(INTERVAL_PROP.get());
    }
    
    /**
     * Gets the value of the PaymentInstrumentID field.
     * The Public ID of the payment instrument.  May be null.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPaymentInstrumentID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PAYMENTINSTRUMENTID_PROP.get());
    }
    
    /**
     * Gets the value of the PaymentMethod field.
     * Payment Method (e.g. Credit Card, Send Invoice...)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AccountPaymentMethod getPaymentMethod() {
      return (typekey.AccountPaymentMethod)__getInternalInterface().getFieldValue(PAYMENTMETHOD_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyPeriod field.
     * The associated policy period.
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the SecondAnchorDate field.
     * A date that determines the second invoicing day for periodicities that need two anchor dates.           This determines the second invoicing day of month for twice-per-month BillingPeriodicity.  This date should fall on the           desired second invoicing day of month.  If the BillingPeriodicity is twice-per-month and the second anchor date is           not set, then the stream will invoice on the day determined by the FirstAnchorDate and one-half month from then.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getSecondAnchorDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(SECONDANCHORDATE_PROP.get());
    }
    
    /**
     * Gets the value of the SecondDayOfMonth field.
     * Second day (of two) of the month for twice-per-month invoicing.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getSecondDayOfMonth() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(SECONDDAYOFMONTH_PROP.get());
    }
    
    /**
     * Gets the value of the UnappliedFundDescription field.
     * The description of a new unapplied fund for this invoice stream. Null if there is no new unapplied fund being created.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getUnappliedFundDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(UNAPPLIEDFUNDDESCRIPTION_PROP.get());
    }
    
    /**
     * Gets the value of the UnappliedFundID field.
     * The Public ID of the existing unapplied fund which has been selected for this invoice stream. Null if there is no existing unapplied fund.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getUnappliedFundID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(UNAPPLIEDFUNDID_PROP.get());
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
     * Gets the value of the DueDateBilling field.
     * Whether or not the account's invoice date(s) are the date the invoice is sent or due.                 If false the date is the date the invoice is sent (EventDate),                 If true the date is the date the invoice is due (PaymentDueDate)
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDueDateBilling() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DUEDATEBILLING_PROP.get());
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
     * Sets the value of the DayOfWeek field.
     */
    public void setDayOfWeek(typekey.DayOfWeek value) {
      __getInternalInterface().setFieldValue(DAYOFWEEK_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Description field.
     */
    public void setDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DueDateBilling field.
     */
    public void setDueDateBilling(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DUEDATEBILLING_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FirstAnchorDate field.
     */
    public void setFirstAnchorDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(FIRSTANCHORDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FirstDayOfMonth field.
     */
    public void setFirstDayOfMonth(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(FIRSTDAYOFMONTH_PROP.get(), value);
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
     * Sets the value of the Interval field.
     */
    public void setInterval(typekey.BillingPeriodicity value) {
      __getInternalInterface().setFieldValue(INTERVAL_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
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
     * Sets the value of the PaymentInstrumentID field.
     */
    public void setPaymentInstrumentID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PAYMENTINSTRUMENTID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PaymentMethod field.
     */
    public void setPaymentMethod(typekey.AccountPaymentMethod value) {
      __getInternalInterface().setFieldValue(PAYMENTMETHOD_PROP.get(), value);
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
     * Sets the value of the SecondAnchorDate field.
     */
    public void setSecondAnchorDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(SECONDANCHORDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SecondDayOfMonth field.
     */
    public void setSecondDayOfMonth(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(SECONDDAYOFMONTH_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UnappliedFundDescription field.
     */
    public void setUnappliedFundDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(UNAPPLIEDFUNDDESCRIPTION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the UnappliedFundID field.
     */
    public void setUnappliedFundID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(UNAPPLIEDFUNDID_PROP.get(), value);
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
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.BillingInvoiceStream.class, config);
    com.guidewire._generated.entity.BillingInvoiceStreamInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.BillingInvoiceStream, com.guidewire._generated.entity.BillingInvoiceStreamInternal>() {
      public java.lang.Object getImplementation(entity.BillingInvoiceStream bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.BillingInvoiceStreamInternal getInternalInterface(entity.BillingInvoiceStream bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.BillingInvoiceStream newEmptyInstance() {
        return new entity.BillingInvoiceStream((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}