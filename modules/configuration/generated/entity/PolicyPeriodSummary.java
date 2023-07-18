package entity;

/**
 * PolicyPeriodSummary
 * Encapsulates the "summary" or "header" fields needed to display the results of a PolicyPeriod search.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PolicyPeriodSummary.eti;PolicyPeriodSummary.eix;PolicyPeriodSummary.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "PolicyPeriodSummary")
public class PolicyPeriodSummary extends com.guidewire.pl.persistence.code.BeanBase implements entity.KeyableBean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.PolicyPeriodSummary> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.PolicyPeriodSummary>("entity.PolicyPeriodSummary");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACCOUNTNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AccountNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BRANCHNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BranchName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BRANCHNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BranchNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CANCELLATIONDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CancellationDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> EDITEFFECTIVEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "EditEffectiveDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INSUREDDISPLAYNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InsuredDisplayName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> JOB_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Job");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> MODELNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ModelNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PERIODEND_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PeriodEnd");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PERIODID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PeriodId");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PERIODSTART_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PeriodStart");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYNUMBER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PolicyNumber");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> POLICYPERIODID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PolicyPeriodId");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> POLICYTERMARCHIVESTATE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "PolicyTermArchiveState");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PRODUCERCODEOFRECORD_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ProducerCodeOfRecord");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> PRODUCERCODEOFSERVICE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ProducerCodeOfService");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCERNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProducerName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PRODUCTCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ProductCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> STATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Status");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.PolicyPeriodSummaryInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public PolicyPeriodSummary()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public PolicyPeriodSummary(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected PolicyPeriodSummary(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.PolicyPeriodSummaryInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.PolicyPeriodSummaryInternal __getInternalInterface() {
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
   * Gets the value of the AccountNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAccountNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ACCOUNTNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the BranchName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getBranchName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BRANCHNAME_PROP.get());
  }
  
  /**
   * Gets the value of the BranchNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBranchNumber() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(BRANCHNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the CancellationDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getCancellationDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(CANCELLATIONDATE_PROP.get());
  }
  
  /**
   * Gets the value of the EditEffectiveDate field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getEditEffectiveDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(EDITEFFECTIVEDATE_PROP.get());
  }
  
  /**
   * 
   * @return Unique identifier of the object.
   */
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.commons.entity.Keyable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Keyable")).getID();
  }
  
  /**
   * Gets the value of the InsuredDisplayName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInsuredDisplayName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INSUREDDISPLAYNAME_PROP.get());
  }
  
  /**
   * Gets the value of the Job field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Job getJob() {
    return (entity.Job)__getInternalInterface().getFieldValue(JOB_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getModelNumber() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(MODELNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the PeriodEnd field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPeriodEnd() {
    return (java.util.Date)__getInternalInterface().getFieldValue(PERIODEND_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getPeriodId() {
    return (gw.pl.persistence.core.Key)__getInternalInterface().getFieldValue(PERIODID_PROP.get());
  }
  
  /**
   * Gets the value of the PeriodStart field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getPeriodStart() {
    return (java.util.Date)__getInternalInterface().getFieldValue(PERIODSTART_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyNumber field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPolicyNumber() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYNUMBER_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyPeriodId field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getPolicyPeriodId() {
    return (gw.pl.persistence.core.Key)__getInternalInterface().getFieldValue(POLICYPERIODID_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyTermArchiveState field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyTermArchiveState getPolicyTermArchiveState() {
    return (typekey.PolicyTermArchiveState)__getInternalInterface().getFieldValue(POLICYTERMARCHIVESTATE_PROP.get());
  }
  
  /**
   * Gets the value of the ProducerCodeOfRecord field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCodeOfRecord() {
    return (entity.ProducerCode)__getInternalInterface().getFieldValue(PRODUCERCODEOFRECORD_PROP.get());
  }
  
  /**
   * Gets the value of the ProducerCodeOfService field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.ProducerCode getProducerCodeOfService() {
    return (entity.ProducerCode)__getInternalInterface().getFieldValue(PRODUCERCODEOFSERVICE_PROP.get());
  }
  
  /**
   * Gets the value of the ProducerName field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProducerName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCERNAME_PROP.get());
  }
  
  /**
   * Returns the actual Product associated with this revision by using the ProductCode.
   * @return the product for this summary
   */
  public gw.api.productmodel.Product getProduct() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodSummaryPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodSummaryPublicMethods")).getProduct();
  }
  
  /**
   * Gets the value of the ProductCode field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getProductCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTCODE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the Status field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.PolicyPeriodStatus getStatus() {
    return (typekey.PolicyPeriodStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
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
   * Returns whether the PolicyPeriod's PolicyTerm is archived.
   * The PolicyTerm is archived if any PolicyPeriods with a
   * ForeignKey to the PolicyTerm are archived.
   * @return true if and only if this#PolicyTermArchiveState != PolicyTermArchiveState.TC_NotArchived
   */
  public java.lang.Boolean isTermArchived() {
    return ((com.guidewire.pc.domain.policy.period.PolicyPeriodSummaryPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodSummaryPublicMethods")).isTermArchived();
  }
  
  /**
   * Populates the fields of this policy period summary from the policy
   * period <code>rev</code>. First populates product fields, then passes
   * this PolicyPeriodSummary and the supplied PolicyPeriod to the
   * "gw.policy.PolicyAdmin.populatePolicyPeriodSummary()" Gosu
   * library function.
   * @param policyPeriod the period to populate from
   */
  public void populateFromPolicyPeriod(entity.PolicyPeriod policyPeriod) {
    ((com.guidewire.pc.domain.policy.period.PolicyPeriodSummaryPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodSummaryPublicMethods")).populateFromPolicyPeriod(policyPeriod);
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
   * Sets the value of the AccountNumber field.
   */
  public void setAccountNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ACCOUNTNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BranchName field.
   */
  public void setBranchName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(BRANCHNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BranchNumber field.
   */
  public void setBranchNumber(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BRANCHNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CancellationDate field.
   */
  public void setCancellationDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(CANCELLATIONDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the EditEffectiveDate field.
   */
  public void setEditEffectiveDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(EDITEFFECTIVEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InsuredDisplayName field.
   */
  public void setInsuredDisplayName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(INSUREDDISPLAYNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Job field.
   */
  public void setJob(entity.Job value) {
    __getInternalInterface().setFieldValue(JOB_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ModelNumber field.
   */
  private void setModelNumber(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(MODELNUMBER_PROP.get(), value);
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
   * Sets the value of the PeriodEnd field.
   */
  public void setPeriodEnd(java.util.Date value) {
    __getInternalInterface().setFieldValue(PERIODEND_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PeriodId field.
   */
  private void setPeriodId(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(PERIODID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PeriodStart field.
   */
  public void setPeriodStart(java.util.Date value) {
    __getInternalInterface().setFieldValue(PERIODSTART_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyNumber field.
   */
  public void setPolicyNumber(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(POLICYNUMBER_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyPeriodId field.
   */
  private void setPolicyPeriodId(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(POLICYPERIODID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyTermArchiveState field.
   */
  private void setPolicyTermArchiveState(typekey.PolicyTermArchiveState value) {
    __getInternalInterface().setFieldValue(POLICYTERMARCHIVESTATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProducerCodeOfRecord field.
   */
  public void setProducerCodeOfRecord(entity.ProducerCode value) {
    __getInternalInterface().setFieldValue(PRODUCERCODEOFRECORD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProducerCodeOfService field.
   */
  public void setProducerCodeOfService(entity.ProducerCode value) {
    __getInternalInterface().setFieldValue(PRODUCERCODEOFSERVICE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProducerName field.
   */
  public void setProducerName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODUCERNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ProductCode field.
   */
  public void setProductCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(PRODUCTCODE_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the Status field.
   */
  public void setStatus(typekey.PolicyPeriodStatus value) {
    __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.PolicyPeriodSummaryInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.PolicyPeriodSummary.this.__getDelegateManager();
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
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
     * Gets the value of the AccountNumber field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAccountNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ACCOUNTNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the BranchName field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getBranchName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(BRANCHNAME_PROP.get());
    }
    
    /**
     * Gets the value of the BranchNumber field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBranchNumber() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(BRANCHNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the CancellationDate field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getCancellationDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(CANCELLATIONDATE_PROP.get());
    }
    
    /**
     * Gets the value of the EditEffectiveDate field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getEditEffectiveDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(EDITEFFECTIVEDATE_PROP.get());
    }
    
    /**
     * 
     * @return Unique identifier of the object.
     */
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.commons.entity.Keyable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Keyable")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the InsuredDisplayName field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getInsuredDisplayName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INSUREDDISPLAYNAME_PROP.get());
    }
    
    /**
     * Gets the value of the Job field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Job getJob() {
      return (entity.Job)__getInternalInterface().getFieldValue(JOB_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getJobID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(JOB_PROP.get());
    }
    
    /**
     * Gets the value of the ModelNumber field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getModelNumber() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(MODELNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the PeriodEnd field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getPeriodEnd() {
      return (java.util.Date)__getInternalInterface().getFieldValue(PERIODEND_PROP.get());
    }
    
    /**
     * Gets the value of the PeriodId field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getPeriodId() {
      return (gw.pl.persistence.core.Key)__getInternalInterface().getFieldValue(PERIODID_PROP.get());
    }
    
    /**
     * Gets the value of the PeriodStart field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getPeriodStart() {
      return (java.util.Date)__getInternalInterface().getFieldValue(PERIODSTART_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyNumber field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPolicyNumber() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(POLICYNUMBER_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyPeriodId field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getPolicyPeriodId() {
      return (gw.pl.persistence.core.Key)__getInternalInterface().getFieldValue(POLICYPERIODID_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyTermArchiveState field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PolicyTermArchiveState getPolicyTermArchiveState() {
      return (typekey.PolicyTermArchiveState)__getInternalInterface().getFieldValue(POLICYTERMARCHIVESTATE_PROP.get());
    }
    
    /**
     * Gets the value of the ProducerCodeOfRecord field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ProducerCode getProducerCodeOfRecord() {
      return (entity.ProducerCode)__getInternalInterface().getFieldValue(PRODUCERCODEOFRECORD_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getProducerCodeOfRecordID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PRODUCERCODEOFRECORD_PROP.get());
    }
    
    /**
     * Gets the value of the ProducerCodeOfService field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.ProducerCode getProducerCodeOfService() {
      return (entity.ProducerCode)__getInternalInterface().getFieldValue(PRODUCERCODEOFSERVICE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getProducerCodeOfServiceID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(PRODUCERCODEOFSERVICE_PROP.get());
    }
    
    /**
     * Gets the value of the ProducerName field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProducerName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCERNAME_PROP.get());
    }
    
    /**
     * Returns the actual Product associated with this revision by using the ProductCode.
     * @return the product for this summary
     */
    public gw.api.productmodel.Product getProduct() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodSummaryPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodSummaryPublicMethods")).getProduct();
    }
    
    /**
     * Gets the value of the ProductCode field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getProductCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(PRODUCTCODE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the Status field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.PolicyPeriodStatus getStatus() {
      return (typekey.PolicyPeriodStatus)__getInternalInterface().getFieldValue(STATUS_PROP.get());
    }
    
    public void initInBundle(gw.pl.persistence.core.Key id, gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).initInBundle(id, bundle);
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
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    /**
     * Returns whether the PolicyPeriod's PolicyTerm is archived.
     * The PolicyTerm is archived if any PolicyPeriods with a
     * ForeignKey to the PolicyTerm are archived.
     * @return true if and only if this#PolicyTermArchiveState != PolicyTermArchiveState.TC_NotArchived
     */
    public java.lang.Boolean isTermArchived() {
      return ((com.guidewire.pc.domain.policy.period.PolicyPeriodSummaryPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodSummaryPublicMethods")).isTermArchived();
    }
    
    public entity.KeyableBean overrideBundleAdd(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleAdd(bundle);
    }
    
    public entity.KeyableBean overrideBundleRemove(gw.pl.persistence.core.Bundle bundle) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).overrideBundleRemove(bundle);
    }
    
    /**
     * Populates the fields of this policy period summary from the policy
     * period <code>rev</code>. First populates product fields, then passes
     * this PolicyPeriodSummary and the supplied PolicyPeriod to the
     * "gw.policy.PolicyAdmin.populatePolicyPeriodSummary()" Gosu
     * library function.
     * @param policyPeriod the period to populate from
     */
    public void populateFromPolicyPeriod(entity.PolicyPeriod policyPeriod) {
      ((com.guidewire.pc.domain.policy.period.PolicyPeriodSummaryPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.period.PolicyPeriodSummaryPublicMethods")).populateFromPolicyPeriod(policyPeriod);
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
     * Sets the value of the AccountNumber field.
     */
    public void setAccountNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ACCOUNTNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BranchName field.
     */
    public void setBranchName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(BRANCHNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BranchNumber field.
     */
    public void setBranchNumber(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BRANCHNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CancellationDate field.
     */
    public void setCancellationDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(CANCELLATIONDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the EditEffectiveDate field.
     */
    public void setEditEffectiveDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(EDITEFFECTIVEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InsuredDisplayName field.
     */
    public void setInsuredDisplayName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(INSUREDDISPLAYNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Job field.
     */
    public void setJob(entity.Job value) {
      __getInternalInterface().setFieldValue(JOB_PROP.get(), value);
    }
    
    public void setJobID(gw.pl.persistence.core.Key value) {
      setFieldValue(JOB_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the ModelNumber field.
     */
    public void setModelNumber(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(MODELNUMBER_PROP.get(), value);
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
     * Sets the value of the PeriodEnd field.
     */
    public void setPeriodEnd(java.util.Date value) {
      __getInternalInterface().setFieldValue(PERIODEND_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PeriodId field.
     */
    public void setPeriodId(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(PERIODID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PeriodStart field.
     */
    public void setPeriodStart(java.util.Date value) {
      __getInternalInterface().setFieldValue(PERIODSTART_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyNumber field.
     */
    public void setPolicyNumber(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(POLICYNUMBER_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyPeriodId field.
     */
    public void setPolicyPeriodId(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(POLICYPERIODID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyTermArchiveState field.
     */
    public void setPolicyTermArchiveState(typekey.PolicyTermArchiveState value) {
      __getInternalInterface().setFieldValue(POLICYTERMARCHIVESTATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProducerCodeOfRecord field.
     */
    public void setProducerCodeOfRecord(entity.ProducerCode value) {
      __getInternalInterface().setFieldValue(PRODUCERCODEOFRECORD_PROP.get(), value);
    }
    
    public void setProducerCodeOfRecordID(gw.pl.persistence.core.Key value) {
      setFieldValue(PRODUCERCODEOFRECORD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProducerCodeOfService field.
     */
    public void setProducerCodeOfService(entity.ProducerCode value) {
      __getInternalInterface().setFieldValue(PRODUCERCODEOFSERVICE_PROP.get(), value);
    }
    
    public void setProducerCodeOfServiceID(gw.pl.persistence.core.Key value) {
      setFieldValue(PRODUCERCODEOFSERVICE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProducerName field.
     */
    public void setProducerName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODUCERNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ProductCode field.
     */
    public void setProductCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(PRODUCTCODE_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the Status field.
     */
    public void setStatus(typekey.PolicyPeriodStatus value) {
      __getInternalInterface().setFieldValue(STATUS_PROP.get(), value);
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pc.domain.policy.period.PolicyPeriodSummaryPublicMethods", "com.guidewire.pc.domain.policy.period.impl.PolicyPeriodSummaryImpl");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.PolicyPeriodSummary.class, config);
    com.guidewire._generated.entity.PolicyPeriodSummaryInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.PolicyPeriodSummary, com.guidewire._generated.entity.PolicyPeriodSummaryInternal>() {
      public java.lang.Object getImplementation(entity.PolicyPeriodSummary bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PolicyPeriodSummaryInternal getInternalInterface(entity.PolicyPeriodSummary bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.PolicyPeriodSummary newEmptyInstance() {
        return new entity.PolicyPeriodSummary((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}