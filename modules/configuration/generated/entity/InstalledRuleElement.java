package entity;

/**
 * InstalledRuleElement
 * A rule element, which represents a variant of a rule
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "InstalledRuleElement.eti;InstalledRuleElement.eix;InstalledRuleElement.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "InstalledRuleElement")
public class InstalledRuleElement extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.InstalledRuleElement> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.InstalledRuleElement>("entity.InstalledRuleElement");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONDITION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Condition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CONDITIONTARGETS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ConditionTargets");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEFAULTBOOLEANVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DefaultBooleanValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEFAULTDATEVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DefaultDateValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEFAULTDECIMALVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DefaultDecimalValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEFAULTINTEGERVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DefaultIntegerValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEFAULTSTRINGVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DefaultStringValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEFAULTTYPEKEYVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "DefaultTypekeyValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> EXISTENCE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Existence");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> INSTALLEDRULE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "InstalledRule");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ISSUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Issue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SEQUENCE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Sequence");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> SUBTYPE_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "Subtype");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> VALID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Valid");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.InstalledRuleElementInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public InstalledRuleElement()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public InstalledRuleElement(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected InstalledRuleElement(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.InstalledRuleElementInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.InstalledRuleElementInternal __getInternalInterface() {
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
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the Condition field.
   * Gosu expression to evaluate.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getCondition() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONDITION_PROP.get());
  }
  
  /**
   * Gets the value of the ConditionTargets field.
   * Comma delimited string of targets for condition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getConditionTargets() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONDITIONTARGETS_PROP.get());
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
   * Gets the value of the DefaultDateValue field.
   * The default for a date value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getDefaultDateValue() {
    return (java.util.Date)__getInternalInterface().getFieldValue(DEFAULTDATEVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the DefaultDecimalValue field.
   * The default for a decimal value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.math.BigDecimal getDefaultDecimalValue() {
    return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEFAULTDECIMALVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the DefaultIntegerValue field.
   * The default for an integer value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getDefaultIntegerValue() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(DEFAULTINTEGERVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the DefaultStringValue field.
   * The default for a string value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDefaultStringValue() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DEFAULTSTRINGVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the DefaultTypekeyValue field.
   * The code for a default typekey value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDefaultTypekeyValue() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DEFAULTTYPEKEYVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the Existence field.
   * Existence type if this rule element condition is true. This column is only valid for existence rules.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.APDDataExistenceType getExistence() {
    return (typekey.APDDataExistenceType)__getInternalInterface().getFieldValue(EXISTENCE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the InstalledRule field.
   * The rule that this element belongs to
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InstalledRule getInstalledRule() {
    return (entity.InstalledRule)__getInternalInterface().getFieldValue(INSTALLEDRULE_PROP.get());
  }
  
  /**
   * Gets the value of the Issue field.
   * The description of the validation issue for this element
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getIssue() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ISSUE_PROP.get());
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
   * Gets the value of the Sequence field.
   * Order in which this element should be evaluated, relative to other elements in the rule.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSequence() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(SEQUENCE_PROP.get());
  }
  
  /**
   * Gets the value of the Subtype field.
   * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.InstalledRuleElement getSubtype() {
    return (typekey.InstalledRuleElement)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
   * Gets the value of the DefaultBooleanValue field.
   * The default for a boolean value
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDefaultBooleanValue() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(DEFAULTBOOLEANVALUE_PROP.get());
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
   * Gets the value of the Valid field.
   * Whether or not this element is valid and can be evaluated
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isValid() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(VALID_PROP.get());
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
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Condition field.
   */
  public void setCondition(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CONDITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ConditionTargets field.
   */
  public void setConditionTargets(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CONDITIONTARGETS_PROP.get(), value);
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
   * Sets the value of the DefaultBooleanValue field.
   */
  public void setDefaultBooleanValue(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(DEFAULTBOOLEANVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultDateValue field.
   */
  public void setDefaultDateValue(java.util.Date value) {
    __getInternalInterface().setFieldValue(DEFAULTDATEVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultDecimalValue field.
   */
  public void setDefaultDecimalValue(java.math.BigDecimal value) {
    __getInternalInterface().setFieldValue(DEFAULTDECIMALVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultIntegerValue field.
   */
  public void setDefaultIntegerValue(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(DEFAULTINTEGERVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultStringValue field.
   */
  public void setDefaultStringValue(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DEFAULTSTRINGVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the DefaultTypekeyValue field.
   */
  public void setDefaultTypekeyValue(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DEFAULTTYPEKEYVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Existence field.
   */
  public void setExistence(typekey.APDDataExistenceType value) {
    __getInternalInterface().setFieldValue(EXISTENCE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the InstalledRule field.
   */
  public void setInstalledRule(entity.InstalledRule value) {
    __getInternalInterface().setFieldValue(INSTALLEDRULE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Issue field.
   */
  public void setIssue(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ISSUE_PROP.get(), value);
  }
  
  /**
   * Set a flag denoting that the currently instantiated object has been newly imported from
   * an external source
   * @param newlyImported 
   */
  public void setNewlyImported(boolean newlyImported) {
    ((com.guidewire.commons.entity.Sourceable)__getDelegateManager().getImplementation("com.guidewire.commons.entity.Sourceable")).setNewlyImported(newlyImported);
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
   * Sets the value of the Sequence field.
   */
  public void setSequence(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(SEQUENCE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Subtype field.
   */
  private void setSubtype(typekey.InstalledRuleElement value) {
    __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
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
   * Sets the value of the Valid field.
   */
  public void setValid(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(VALID_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.InstalledRuleElementInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.InstalledRuleElement.this.__getDelegateManager();
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the Condition field.
     * Gosu expression to evaluate.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getCondition() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONDITION_PROP.get());
    }
    
    /**
     * Gets the value of the ConditionTargets field.
     * Comma delimited string of targets for condition
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getConditionTargets() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CONDITIONTARGETS_PROP.get());
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
     * Gets the value of the DefaultDateValue field.
     * The default for a date value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getDefaultDateValue() {
      return (java.util.Date)__getInternalInterface().getFieldValue(DEFAULTDATEVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the DefaultDecimalValue field.
     * The default for a decimal value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.math.BigDecimal getDefaultDecimalValue() {
      return (java.math.BigDecimal)__getInternalInterface().getFieldValue(DEFAULTDECIMALVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the DefaultIntegerValue field.
     * The default for an integer value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getDefaultIntegerValue() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(DEFAULTINTEGERVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the DefaultStringValue field.
     * The default for a string value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDefaultStringValue() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DEFAULTSTRINGVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the DefaultTypekeyValue field.
     * The code for a default typekey value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDefaultTypekeyValue() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DEFAULTTYPEKEYVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the Existence field.
     * Existence type if this rule element condition is true. This column is only valid for existence rules.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.APDDataExistenceType getExistence() {
      return (typekey.APDDataExistenceType)__getInternalInterface().getFieldValue(EXISTENCE_PROP.get());
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
     * Gets the value of the InstalledRule field.
     * The rule that this element belongs to
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.InstalledRule getInstalledRule() {
      return (entity.InstalledRule)__getInternalInterface().getFieldValue(INSTALLEDRULE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getInstalledRuleID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(INSTALLEDRULE_PROP.get());
    }
    
    /**
     * Gets the value of the Issue field.
     * The description of the validation issue for this element
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getIssue() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ISSUE_PROP.get());
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
     * Gets the value of the Sequence field.
     * Order in which this element should be evaluated, relative to other elements in the rule.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getSequence() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(SEQUENCE_PROP.get());
    }
    
    /**
     * Gets the value of the Subtype field.
     * Identifies a particular subtype within a supertype table; each subtype of a supertype has its own unique subtype value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.InstalledRuleElement getSubtype() {
      return (typekey.InstalledRuleElement)__getInternalInterface().getFieldValue(SUBTYPE_PROP.get());
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
     * Gets the value of the DefaultBooleanValue field.
     * The default for a boolean value
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDefaultBooleanValue() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DEFAULTBOOLEANVALUE_PROP.get());
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
    
    /**
     * Gets the value of the Valid field.
     * Whether or not this element is valid and can be evaluated
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isValid() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(VALID_PROP.get());
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
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Condition field.
     */
    public void setCondition(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CONDITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ConditionTargets field.
     */
    public void setConditionTargets(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CONDITIONTARGETS_PROP.get(), value);
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
     * Sets the value of the DefaultBooleanValue field.
     */
    public void setDefaultBooleanValue(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DEFAULTBOOLEANVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultDateValue field.
     */
    public void setDefaultDateValue(java.util.Date value) {
      __getInternalInterface().setFieldValue(DEFAULTDATEVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultDecimalValue field.
     */
    public void setDefaultDecimalValue(java.math.BigDecimal value) {
      __getInternalInterface().setFieldValue(DEFAULTDECIMALVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultIntegerValue field.
     */
    public void setDefaultIntegerValue(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(DEFAULTINTEGERVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultStringValue field.
     */
    public void setDefaultStringValue(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DEFAULTSTRINGVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the DefaultTypekeyValue field.
     */
    public void setDefaultTypekeyValue(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DEFAULTTYPEKEYVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Existence field.
     */
    public void setExistence(typekey.APDDataExistenceType value) {
      __getInternalInterface().setFieldValue(EXISTENCE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the InstalledRule field.
     */
    public void setInstalledRule(entity.InstalledRule value) {
      __getInternalInterface().setFieldValue(INSTALLEDRULE_PROP.get(), value);
    }
    
    public void setInstalledRuleID(gw.pl.persistence.core.Key value) {
      setFieldValue(INSTALLEDRULE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Issue field.
     */
    public void setIssue(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ISSUE_PROP.get(), value);
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
     * Sets the value of the Sequence field.
     */
    public void setSequence(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(SEQUENCE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Subtype field.
     */
    public void setSubtype(typekey.InstalledRuleElement value) {
      __getInternalInterface().setFieldValue(SUBTYPE_PROP.get(), value);
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
     * Sets the value of the Valid field.
     */
    public void setValid(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(VALID_PROP.get(), value);
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
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.InstalledRuleElement.class, config);
    com.guidewire._generated.entity.InstalledRuleElementInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.InstalledRuleElement, com.guidewire._generated.entity.InstalledRuleElementInternal>() {
      public java.lang.Object getImplementation(entity.InstalledRuleElement bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.InstalledRuleElementInternal getInternalInterface(entity.InstalledRuleElement bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.InstalledRuleElement newEmptyInstance() {
        return new entity.InstalledRuleElement((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}