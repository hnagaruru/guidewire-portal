package entity;

/**
 * AuditInformation
 * Contains information about an audit
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "AuditInformation.eti;AuditInformation.eix;AuditInformation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "AuditInformation")
public class AuditInformation extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable, entity.Extractable, entity.FrozenSetMember {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.AuditInformation> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.AuditInformation>("entity.AuditInformation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ACTUALAUDITMETHOD_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "ActualAuditMethod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ARCHIVEPARTITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ArchivePartition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> AUDIT_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Audit");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> AUDITARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "AuditArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IMonetaryAmountPropertyInfo> AUDITFEE_PROP = new com.guidewire.commons.metadata.types.MonetaryAmountPropertyInfoCache(TYPE, "AuditFee");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AUDITFEE_AMT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AuditFee_amt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> AUDITFEE_CUR_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AuditFee_cur");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> AUDITMETHOD_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AuditMethod");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AUDITPERIODENDDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AuditPeriodEndDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> AUDITPERIODSTARTDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AuditPeriodStartDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> AUDITSCHEDULETYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "AuditScheduleType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DUEDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DueDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ESCALATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Escalated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> FIRSTESCALATIONPROMPT_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "FirstEscalationPrompt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> FROZENSET_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "FrozenSet");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INITDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "InitDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> INSTRUCTIONS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Instructions");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NUMDAYSAFTERFIRSTESCALATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NumDaysAfterFirstEscalation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NUMDAYSAFTERSECONDESCALATION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NumDaysAfterSecondEscalation");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICY_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Policy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> POLICYTERM_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "PolicyTerm");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RECEIVEDDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReceivedDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REVERSALDATE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReversalDate");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> REVISIONTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RevisionType");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SECONDESCALATIONPROMPT_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "SecondEscalationPrompt");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SERIES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Series");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> WAIVE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Waive");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.AuditInformationInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public AuditInformation()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public AuditInformation(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected AuditInformation(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.AuditInformationInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.AuditInformationInternal __getInternalInterface() {
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
   * Gets the value of the ActualAuditMethod field.
   * Actual audit method used for this audit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AuditMethod getActualAuditMethod() {
    return (typekey.AuditMethod)__getInternalInterface().getFieldValue(ACTUALAUDITMETHOD_PROP.get());
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
   * Gets the value of the Audit field.
   * The audit job for this audit.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Audit getAudit() {
    return (entity.Audit)__getInternalInterface().getFieldValue(AUDIT_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Audit[] getAuditArray() {
    return (entity.Audit[])__getInternalInterface().getFieldValue(AUDITARRAY_PROP.get());
  }
  
  /**
   * Gets the value of the AuditFee field.
   * Fee for this audit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.currency.MonetaryAmount getAuditFee() {
    return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(AUDITFEE_PROP.get());
  }
  
  /**
   * Gets the value of the AuditFee_amt field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getAuditFee_amt() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(AUDITFEE_AMT_PROP.get());
  }
  
  /**
   * Gets the value of the AuditFee_cur field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.Currency getAuditFee_cur() {
    return (typekey.Currency)__getInternalInterface().getFieldValue(AUDITFEE_CUR_PROP.get());
  }
  
  /**
   * Gets the value of the AuditMethod field.
   * The audit method to be used.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AuditMethod getAuditMethod() {
    return (typekey.AuditMethod)__getInternalInterface().getFieldValue(AUDITMETHOD_PROP.get());
  }
  
  /**
   * Gets the value of the AuditPeriodEndDate field.
   * End date of the audit period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAuditPeriodEndDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(AUDITPERIODENDDATE_PROP.get());
  }
  
  /**
   * Gets the value of the AuditPeriodStartDate field.
   * Start date of the audit period.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getAuditPeriodStartDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(AUDITPERIODSTARTDATE_PROP.get());
  }
  
  /**
   * Gets the value of the AuditScheduleType field.
   * The type of schedule that is used to schedule audits
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AuditScheduleType getAuditScheduleType() {
    return (typekey.AuditScheduleType)__getInternalInterface().getFieldValue(AUDITSCHEDULETYPE_PROP.get());
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
   * Gets the value of the DueDate field.
   * Due date of the audit.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDueDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DUEDATE_PROP.get());
  }
  
  /**
   * Gets the value of the FirstEscalationPrompt field.
   * The type of first escalation prompt on audit schedule pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AuditEscalationPromptType getFirstEscalationPrompt() {
    return (typekey.AuditEscalationPromptType)__getInternalInterface().getFieldValue(FIRSTESCALATIONPROMPT_PROP.get());
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
   * Gets the value of the InitDate field.
   * Initialization date of the audit task.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getInitDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(INITDATE_PROP.get());
  }
  
  /**
   * Gets the value of the Instructions field.
   * Special instructions for the auditor
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getInstructions() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INSTRUCTIONS_PROP.get());
  }
  
  /**
   * Gets the value of the NumDaysAfterFirstEscalation field.
   * Number of days after the first escalation prompt  
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumDaysAfterFirstEscalation() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMDAYSAFTERFIRSTESCALATION_PROP.get());
  }
  
  /**
   * Gets the value of the NumDaysAfterSecondEscalation field.
   *  Number of days after the second escalation prompt
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumDaysAfterSecondEscalation() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMDAYSAFTERSECONDESCALATION_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Policy getPolicy() {
    return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
  }
  
  /**
   * Gets the value of the PolicyTerm field.
   * Associated policy term
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.PolicyTerm getPolicyTerm() {
    return (entity.PolicyTerm)__getInternalInterface().getFieldValue(POLICYTERM_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the ReceivedDate field.
   * The date the audit related information was received
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReceivedDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(RECEIVEDDATE_PROP.get());
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
   * Gets the value of the ReversalDate field.
   * The date this audit was reversed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getReversalDate() {
    return (java.util.Date)__getInternalInterface().getFieldValue(REVERSALDATE_PROP.get());
  }
  
  /**
   * Gets the value of the RevisionType field.
   * The type of revision (revision or reversal) that is applied to this audit
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RevisionType getRevisionType() {
    return (typekey.RevisionType)__getInternalInterface().getFieldValue(REVISIONTYPE_PROP.get());
  }
  
  /**
   * Gets the value of the SecondEscalationPrompt field.
   * The type of second escalation prompt on audit schedule pattern
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.AuditEscalationPromptType getSecondEscalationPrompt() {
    return (typekey.AuditEscalationPromptType)__getInternalInterface().getFieldValue(SECONDESCALATIONPROMPT_PROP.get());
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
   * Gets the value of the Escalated field.
   * Whether or not this audit has been escalated by the overdue premium report process.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isEscalated() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(ESCALATED_PROP.get());
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
   * Gets the value of the Series field.
   * To indicate whether this is a series audit; primarily to distinguish between single checking and series checking.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isSeries() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(SERIES_PROP.get());
  }
  
  /**
   * Gets the value of the Waive field.
   * Was the audit waived?
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isWaive() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(WAIVE_PROP.get());
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
   * Sets the value of the ActualAuditMethod field.
   */
  public void setActualAuditMethod(typekey.AuditMethod value) {
    __getInternalInterface().setFieldValue(ACTUALAUDITMETHOD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ArchivePartition field.
   */
  private void setArchivePartition(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Audit field.
   */
  public void setAudit(entity.Audit value) {
    __getInternalInterface().setFieldValue(AUDIT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AuditArray field.
   */
  private void setAuditArray(entity.Audit[] value) {
    __getInternalInterface().setFieldValue(AUDITARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AuditFee field.
   */
  public void setAuditFee(gw.pl.currency.MonetaryAmount value) {
    __getInternalInterface().setFieldValue(AUDITFEE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AuditFee_amt field.
   */
  private void setAuditFee_amt(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(AUDITFEE_AMT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AuditFee_cur field.
   */
  private void setAuditFee_cur(typekey.Currency value) {
    __getInternalInterface().setFieldValue(AUDITFEE_CUR_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AuditMethod field.
   */
  public void setAuditMethod(typekey.AuditMethod value) {
    __getInternalInterface().setFieldValue(AUDITMETHOD_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AuditPeriodEndDate field.
   */
  private void setAuditPeriodEndDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(AUDITPERIODENDDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AuditPeriodStartDate field.
   */
  private void setAuditPeriodStartDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(AUDITPERIODSTARTDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the AuditScheduleType field.
   */
  private void setAuditScheduleType(typekey.AuditScheduleType value) {
    __getInternalInterface().setFieldValue(AUDITSCHEDULETYPE_PROP.get(), value);
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
   * Sets the value of the DueDate field.
   */
  public void setDueDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(DUEDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Escalated field.
   */
  public void setEscalated(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(ESCALATED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the FirstEscalationPrompt field.
   */
  public void setFirstEscalationPrompt(typekey.AuditEscalationPromptType value) {
    __getInternalInterface().setFieldValue(FIRSTESCALATIONPROMPT_PROP.get(), value);
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
   * Sets the value of the InitDate field.
   */
  public void setInitDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(INITDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Instructions field.
   */
  public void setInstructions(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(INSTRUCTIONS_PROP.get(), value);
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
   * Sets the value of the NumDaysAfterFirstEscalation field.
   */
  public void setNumDaysAfterFirstEscalation(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NUMDAYSAFTERFIRSTESCALATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the NumDaysAfterSecondEscalation field.
   */
  public void setNumDaysAfterSecondEscalation(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NUMDAYSAFTERSECONDESCALATION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Policy field.
   */
  private void setPolicy(entity.Policy value) {
    __getInternalInterface().setFieldValue(POLICY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the PolicyTerm field.
   */
  private void setPolicyTerm(entity.PolicyTerm value) {
    __getInternalInterface().setFieldValue(POLICYTERM_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the ReceivedDate field.
   */
  public void setReceivedDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(RECEIVEDDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ReversalDate field.
   */
  public void setReversalDate(java.util.Date value) {
    __getInternalInterface().setFieldValue(REVERSALDATE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RevisionType field.
   */
  private void setRevisionType(typekey.RevisionType value) {
    __getInternalInterface().setFieldValue(REVISIONTYPE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the SecondEscalationPrompt field.
   */
  public void setSecondEscalationPrompt(typekey.AuditEscalationPromptType value) {
    __getInternalInterface().setFieldValue(SECONDESCALATIONPROMPT_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Series field.
   */
  public void setSeries(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(SERIES_PROP.get(), value);
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
   * Sets the value of the Waive field.
   */
  public void setWaive(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(WAIVE_PROP.get(), value);
  }
  
  /**
   * Creates and starts an Audit job in the bundle associated with this AuditInformation.
   */
  public void startAuditJob() {
    ((com.guidewire.pc.domain.policy.audit.AuditInformationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.audit.AuditInformationPublicMethods")).startAuditJob();
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
   * Update the audit period end date following a policy cancellation.  The audit period end date should match
   * the cancellation date for the policy itself.  In addition, the audit due date must also be updated.
   * @param period the policy period for which this audit info was created
   * @param pattern the pattern to use for adjusting dates
   */
  public void updateEndDatesFollowingCancellation(entity.PolicyPeriod period, gw.api.productmodel.AuditSchedulePattern pattern) {
    ((com.guidewire.pc.domain.policy.audit.AuditInformationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.audit.AuditInformationPublicMethods")).updateEndDatesFollowingCancellation(period, pattern);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.AuditInformationInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.AuditInformation.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the AuditArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToAuditArray(entity.Audit element) {
      __getInternalInterface().addArrayElement(AUDITARRAY_PROP.get(), element);
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
     * Gets the value of the ActualAuditMethod field.
     * Actual audit method used for this audit
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AuditMethod getActualAuditMethod() {
      return (typekey.AuditMethod)__getInternalInterface().getFieldValue(ACTUALAUDITMETHOD_PROP.get());
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
     * Gets the value of the Audit field.
     * The audit job for this audit.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Audit getAudit() {
      return (entity.Audit)__getInternalInterface().getFieldValue(AUDIT_PROP.get());
    }
    
    /**
     * Gets the value of the AuditArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Audit[] getAuditArray() {
      return (entity.Audit[])__getInternalInterface().getFieldValue(AUDITARRAY_PROP.get());
    }
    
    /**
     * Gets the value of the AuditFee field.
     * Fee for this audit
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.currency.MonetaryAmount getAuditFee() {
      return (gw.pl.currency.MonetaryAmount)__getInternalInterface().getFieldValue(AUDITFEE_PROP.get());
    }
    
    /**
     * Gets the value of the AuditFee_amt field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getAuditFee_amt() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(AUDITFEE_AMT_PROP.get());
    }
    
    /**
     * Gets the value of the AuditFee_cur field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.Currency getAuditFee_cur() {
      return (typekey.Currency)__getInternalInterface().getFieldValue(AUDITFEE_CUR_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getAuditID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(AUDIT_PROP.get());
    }
    
    /**
     * Gets the value of the AuditMethod field.
     * The audit method to be used.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AuditMethod getAuditMethod() {
      return (typekey.AuditMethod)__getInternalInterface().getFieldValue(AUDITMETHOD_PROP.get());
    }
    
    /**
     * Gets the value of the AuditPeriodEndDate field.
     * End date of the audit period.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getAuditPeriodEndDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(AUDITPERIODENDDATE_PROP.get());
    }
    
    /**
     * Gets the value of the AuditPeriodStartDate field.
     * Start date of the audit period.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getAuditPeriodStartDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(AUDITPERIODSTARTDATE_PROP.get());
    }
    
    /**
     * Gets the value of the AuditScheduleType field.
     * The type of schedule that is used to schedule audits
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AuditScheduleType getAuditScheduleType() {
      return (typekey.AuditScheduleType)__getInternalInterface().getFieldValue(AUDITSCHEDULETYPE_PROP.get());
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
     * Gets the value of the DueDate field.
     * Due date of the audit.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDueDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DUEDATE_PROP.get());
    }
    
    /**
     * Gets the value of the FirstEscalationPrompt field.
     * The type of first escalation prompt on audit schedule pattern
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AuditEscalationPromptType getFirstEscalationPrompt() {
      return (typekey.AuditEscalationPromptType)__getInternalInterface().getFieldValue(FIRSTESCALATIONPROMPT_PROP.get());
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
     * Gets the value of the InitDate field.
     * Initialization date of the audit task.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getInitDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(INITDATE_PROP.get());
    }
    
    /**
     * Gets the value of the Instructions field.
     * Special instructions for the auditor
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getInstructions() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(INSTRUCTIONS_PROP.get());
    }
    
    /**
     * Gets the value of the NumDaysAfterFirstEscalation field.
     * Number of days after the first escalation prompt  
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNumDaysAfterFirstEscalation() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMDAYSAFTERFIRSTESCALATION_PROP.get());
    }
    
    /**
     * Gets the value of the NumDaysAfterSecondEscalation field.
     *  Number of days after the second escalation prompt
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNumDaysAfterSecondEscalation() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMDAYSAFTERSECONDESCALATION_PROP.get());
    }
    
    /**
     * Gets the value of the Policy field.
     * The policy containing this audit task.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Policy getPolicy() {
      return (entity.Policy)__getInternalInterface().getFieldValue(POLICY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICY_PROP.get());
    }
    
    /**
     * Gets the value of the PolicyTerm field.
     * Associated policy term
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.PolicyTerm getPolicyTerm() {
      return (entity.PolicyTerm)__getInternalInterface().getFieldValue(POLICYTERM_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getPolicyTermID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(POLICYTERM_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the ReceivedDate field.
     * The date the audit related information was received
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getReceivedDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(RECEIVEDDATE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the ReversalDate field.
     * The date this audit was reversed
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getReversalDate() {
      return (java.util.Date)__getInternalInterface().getFieldValue(REVERSALDATE_PROP.get());
    }
    
    /**
     * Gets the value of the RevisionType field.
     * The type of revision (revision or reversal) that is applied to this audit
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.RevisionType getRevisionType() {
      return (typekey.RevisionType)__getInternalInterface().getFieldValue(REVISIONTYPE_PROP.get());
    }
    
    /**
     * Gets the value of the SecondEscalationPrompt field.
     * The type of second escalation prompt on audit schedule pattern
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.AuditEscalationPromptType getSecondEscalationPrompt() {
      return (typekey.AuditEscalationPromptType)__getInternalInterface().getFieldValue(SECONDESCALATIONPROMPT_PROP.get());
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
     * Gets the value of the Escalated field.
     * Whether or not this audit has been escalated by the overdue premium report process.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isEscalated() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(ESCALATED_PROP.get());
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
    
    /**
     * Gets the value of the Series field.
     * To indicate whether this is a series audit; primarily to distinguish between single checking and series checking.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isSeries() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(SERIES_PROP.get());
    }
    
    public boolean isTemporary() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).isTemporary();
    }
    
    /**
     * Gets the value of the Waive field.
     * Was the audit waived?
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isWaive() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(WAIVE_PROP.get());
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
     * Removes the given element from the AuditArray array. This is achieved by marking the element for removal.
     */
    public void removeFromAuditArray(entity.Audit element) {
      __getInternalInterface().removeArrayElement(AUDITARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the AuditArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromAuditArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(AUDITARRAY_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the ActualAuditMethod field.
     */
    public void setActualAuditMethod(typekey.AuditMethod value) {
      __getInternalInterface().setFieldValue(ACTUALAUDITMETHOD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ArchivePartition field.
     */
    public void setArchivePartition(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ARCHIVEPARTITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Audit field.
     */
    public void setAudit(entity.Audit value) {
      __getInternalInterface().setFieldValue(AUDIT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AuditArray field.
     */
    public void setAuditArray(entity.Audit[] value) {
      __getInternalInterface().setFieldValue(AUDITARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AuditFee field.
     */
    public void setAuditFee(gw.pl.currency.MonetaryAmount value) {
      __getInternalInterface().setFieldValue(AUDITFEE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AuditFee_amt field.
     */
    public void setAuditFee_amt(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(AUDITFEE_AMT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AuditFee_cur field.
     */
    public void setAuditFee_cur(typekey.Currency value) {
      __getInternalInterface().setFieldValue(AUDITFEE_CUR_PROP.get(), value);
    }
    
    public void setAuditID(gw.pl.persistence.core.Key value) {
      setFieldValue(AUDIT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AuditMethod field.
     */
    public void setAuditMethod(typekey.AuditMethod value) {
      __getInternalInterface().setFieldValue(AUDITMETHOD_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AuditPeriodEndDate field.
     */
    public void setAuditPeriodEndDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(AUDITPERIODENDDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AuditPeriodStartDate field.
     */
    public void setAuditPeriodStartDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(AUDITPERIODSTARTDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the AuditScheduleType field.
     */
    public void setAuditScheduleType(typekey.AuditScheduleType value) {
      __getInternalInterface().setFieldValue(AUDITSCHEDULETYPE_PROP.get(), value);
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
     * Sets the value of the DueDate field.
     */
    public void setDueDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(DUEDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Escalated field.
     */
    public void setEscalated(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(ESCALATED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the FirstEscalationPrompt field.
     */
    public void setFirstEscalationPrompt(typekey.AuditEscalationPromptType value) {
      __getInternalInterface().setFieldValue(FIRSTESCALATIONPROMPT_PROP.get(), value);
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
     * Sets the value of the InitDate field.
     */
    public void setInitDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(INITDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Instructions field.
     */
    public void setInstructions(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(INSTRUCTIONS_PROP.get(), value);
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
     * Sets the value of the NumDaysAfterFirstEscalation field.
     */
    public void setNumDaysAfterFirstEscalation(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NUMDAYSAFTERFIRSTESCALATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the NumDaysAfterSecondEscalation field.
     */
    public void setNumDaysAfterSecondEscalation(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NUMDAYSAFTERSECONDESCALATION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Policy field.
     */
    public void setPolicy(entity.Policy value) {
      __getInternalInterface().setFieldValue(POLICY_PROP.get(), value);
    }
    
    public void setPolicyID(gw.pl.persistence.core.Key value) {
      setFieldValue(POLICY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the PolicyTerm field.
     */
    public void setPolicyTerm(entity.PolicyTerm value) {
      __getInternalInterface().setFieldValue(POLICYTERM_PROP.get(), value);
    }
    
    public void setPolicyTermID(gw.pl.persistence.core.Key value) {
      setFieldValue(POLICYTERM_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the ReceivedDate field.
     */
    public void setReceivedDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(RECEIVEDDATE_PROP.get(), value);
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
     * Sets the value of the ReversalDate field.
     */
    public void setReversalDate(java.util.Date value) {
      __getInternalInterface().setFieldValue(REVERSALDATE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RevisionType field.
     */
    public void setRevisionType(typekey.RevisionType value) {
      __getInternalInterface().setFieldValue(REVISIONTYPE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the SecondEscalationPrompt field.
     */
    public void setSecondEscalationPrompt(typekey.AuditEscalationPromptType value) {
      __getInternalInterface().setFieldValue(SECONDESCALATIONPROMPT_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Series field.
     */
    public void setSeries(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(SERIES_PROP.get(), value);
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
     * Sets the value of the Waive field.
     */
    public void setWaive(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(WAIVE_PROP.get(), value);
    }
    
    /**
     * Creates and starts an Audit job in the bundle associated with this AuditInformation.
     */
    public void startAuditJob() {
      ((com.guidewire.pc.domain.policy.audit.AuditInformationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.audit.AuditInformationPublicMethods")).startAuditJob();
    }
    
    public void startAuditJob(gw.pl.persistence.core.Bundle bundle) {
      ((com.guidewire.pc.domain.policy.audit.impl.AuditInformationInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.audit.impl.AuditInformationInternalMethods")).startAuditJob(bundle);
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
     * Update the audit period end date following a policy cancellation.  The audit period end date should match
     * the cancellation date for the policy itself.  In addition, the audit due date must also be updated.
     * @param period the policy period for which this audit info was created
     * @param pattern the pattern to use for adjusting dates
     */
    public void updateEndDatesFollowingCancellation(entity.PolicyPeriod period, gw.api.productmodel.AuditSchedulePattern pattern) {
      ((com.guidewire.pc.domain.policy.audit.AuditInformationPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.policy.audit.AuditInformationPublicMethods")).updateEndDatesFollowingCancellation(period, pattern);
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pc.domain.policy.audit.AuditInformationPublicMethods", "com.guidewire.pc.domain.policy.audit.impl.AuditInformationImpl");
    config.put("com.guidewire.pc.domain.policy.audit.impl.AuditInformationInternalMethods", "com.guidewire.pc.domain.policy.audit.impl.AuditInformationImpl");
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
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.AuditInformation.class, config);
    com.guidewire._generated.entity.AuditInformationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.AuditInformation, com.guidewire._generated.entity.AuditInformationInternal>() {
      public java.lang.Object getImplementation(entity.AuditInformation bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.AuditInformationInternal getInternalInterface(entity.AuditInformation bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.AuditInformation newEmptyInstance() {
        return new entity.AuditInformation((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}