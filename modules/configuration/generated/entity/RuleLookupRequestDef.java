package entity;

/**
 * RuleLookupRequestDef
 * Lookup Request defintion is used for  querying lookup value from the Lookup Table
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RuleLookupRequestDef.eti;RuleLookupRequestDef.eix;RuleLookupRequestDef.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "RuleLookupRequestDef")
public class RuleLookupRequestDef extends com.guidewire.pl.persistence.code.BeanBase implements entity.Versionable, entity.RuleVersionDependent {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RuleLookupRequestDef> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RuleLookupRequestDef>("entity.RuleLookupRequestDef");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DESCRIPTION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Description");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> LOOKUPEXPRESSIONFRAGMENTS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "LookupExpressionFragments");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> PARAMETERSDEFINITION_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ParametersDefinition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> TABLEID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "TableID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> VALUEDEFINITION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "ValueDefinition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> VALUEDEFINITIONARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "ValueDefinitionArray");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.RuleLookupRequestDefInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public RuleLookupRequestDef()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public RuleLookupRequestDef(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected RuleLookupRequestDef(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.RuleLookupRequestDefInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.RuleLookupRequestDefInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the LookupExpressionFragments array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToLookupExpressionFragments(entity.LookupExpressionFragment element) {
    __getInternalInterface().addArrayElement(LOOKUPEXPRESSIONFRAGMENTS_PROP.get(), element);
  }
  
  /**
   * Adds the given element to the ParametersDefinition array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToParametersDefinition(entity.RuleLookupParameterDef element) {
    __getInternalInterface().addArrayElement(PARAMETERSDEFINITION_PROP.get(), element);
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
   * Gets the value of the Description field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getDescription() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the LookupExpressionFragments field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.LookupExpressionFragment[] getLookupExpressionFragments() {
    return (entity.LookupExpressionFragment[])__getInternalInterface().getFieldValue(LOOKUPEXPRESSIONFRAGMENTS_PROP.get());
  }
  
  /**
   * Gets the value of the ParametersDefinition field.
   * Lookup's Input parameters
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RuleLookupParameterDef[] getParametersDefinition() {
    return (entity.RuleLookupParameterDef[])__getInternalInterface().getFieldValue(PARAMETERSDEFINITION_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the TableID field.
   * Lookup Table Identifier 
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getTableID() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TABLEID_PROP.get());
  }
  
  /**
   * Gets the value of the ValueDefinition field.
   * Holds the Lookup Table Value definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RuleLookupValueDef getValueDefinition() {
    return (entity.RuleLookupValueDef)__getInternalInterface().getFieldValue(VALUEDEFINITION_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RuleLookupValueDef[] getValueDefinitionArray() {
    return (entity.RuleLookupValueDef[])__getInternalInterface().getFieldValue(VALUEDEFINITIONARRAY_PROP.get());
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
   * Removes the given element from the LookupExpressionFragments array. This is achieved by marking the element for removal.
   */
  public void removeFromLookupExpressionFragments(entity.LookupExpressionFragment element) {
    __getInternalInterface().removeArrayElement(LOOKUPEXPRESSIONFRAGMENTS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the LookupExpressionFragments array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromLookupExpressionFragments(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(LOOKUPEXPRESSIONFRAGMENTS_PROP.get(), elementID);
  }
  
  /**
   * Removes the given element from the ParametersDefinition array. This is achieved by marking the element for removal.
   */
  public void removeFromParametersDefinition(entity.RuleLookupParameterDef element) {
    __getInternalInterface().removeArrayElement(PARAMETERSDEFINITION_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the ParametersDefinition array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromParametersDefinition(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(PARAMETERSDEFINITION_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Description field.
   */
  public void setDescription(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LookupExpressionFragments field.
   */
  public void setLookupExpressionFragments(entity.LookupExpressionFragment[] value) {
    __getInternalInterface().setFieldValue(LOOKUPEXPRESSIONFRAGMENTS_PROP.get(), value);
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
   * Sets the value of the ParametersDefinition field.
   */
  public void setParametersDefinition(entity.RuleLookupParameterDef[] value) {
    __getInternalInterface().setFieldValue(PARAMETERSDEFINITION_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the TableID field.
   */
  public void setTableID(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(TABLEID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ValueDefinition field.
   */
  public void setValueDefinition(entity.RuleLookupValueDef value) {
    __getInternalInterface().setFieldValue(VALUEDEFINITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ValueDefinitionArray field.
   */
  private void setValueDefinitionArray(entity.RuleLookupValueDef[] value) {
    __getInternalInterface().setFieldValue(VALUEDEFINITIONARRAY_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.RuleLookupRequestDefInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.RuleLookupRequestDef.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the LookupExpressionFragments array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToLookupExpressionFragments(entity.LookupExpressionFragment element) {
      __getInternalInterface().addArrayElement(LOOKUPEXPRESSIONFRAGMENTS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ParametersDefinition array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToParametersDefinition(entity.RuleLookupParameterDef element) {
      __getInternalInterface().addArrayElement(PARAMETERSDEFINITION_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the ValueDefinitionArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToValueDefinitionArray(entity.RuleLookupValueDef element) {
      __getInternalInterface().addArrayElement(VALUEDEFINITIONARRAY_PROP.get(), element);
    }
    
    public boolean alwaysReserveID() {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).alwaysReserveID();
    }
    
    public void assignPermanentId(gw.pl.persistence.core.Key id) {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).assignPermanentId(id);
    }
    
    public void assignUniquePublicId() {
      ((com.guidewire.bizrules.management.RuleVersionAwareInternal)__getDelegateManager().getImplementation("com.guidewire.bizrules.management.RuleVersionAwareInternal")).assignUniquePublicId();
    }
    
    public void beforeInsert() {
      ((com.guidewire.pl.system.bundle.InsertCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.InsertCallback")).beforeInsert();
    }
    
    public void beforeRemove() {
      ((com.guidewire.pl.system.bundle.RemoveCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.RemoveCallback")).beforeRemove();
    }
    
    public void beforeUpdate() {
      ((com.guidewire.pl.system.bundle.UpdateCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.bundle.UpdateCallback")).beforeUpdate();
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
     * Gets the value of the Description field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getDescription() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(DESCRIPTION_PROP.get());
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
     * Gets the value of the LookupExpressionFragments field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.LookupExpressionFragment[] getLookupExpressionFragments() {
      return (entity.LookupExpressionFragment[])__getInternalInterface().getFieldValue(LOOKUPEXPRESSIONFRAGMENTS_PROP.get());
    }
    
    public java.lang.Iterable<? extends entity.RuleVersionAware> getOwners() {
      return ((gw.bizrules.domain.RuleVersionDependent)__getDelegateManager().getImplementation("gw.bizrules.domain.RuleVersionDependent")).getOwners();
    }
    
    /**
     * Gets the value of the ParametersDefinition field.
     * Lookup's Input parameters
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RuleLookupParameterDef[] getParametersDefinition() {
      return (entity.RuleLookupParameterDef[])__getInternalInterface().getFieldValue(PARAMETERSDEFINITION_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the TableID field.
     * Lookup Table Identifier 
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getTableID() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(TABLEID_PROP.get());
    }
    
    /**
     * Gets the value of the ValueDefinition field.
     * Holds the Lookup Table Value definition
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RuleLookupValueDef getValueDefinition() {
      return (entity.RuleLookupValueDef)__getInternalInterface().getFieldValue(VALUEDEFINITION_PROP.get());
    }
    
    /**
     * Gets the value of the ValueDefinitionArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RuleLookupValueDef[] getValueDefinitionArray() {
      return (entity.RuleLookupValueDef[])__getInternalInterface().getFieldValue(VALUEDEFINITIONARRAY_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getValueDefinitionID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(VALUEDEFINITION_PROP.get());
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
    
    public void onPreInit() {
      ((com.guidewire.pl.system.entity.PreInitCallback)__getDelegateManager().getImplementation("com.guidewire.pl.system.entity.PreInitCallback")).onPreInit();
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
     * Removes the given element from the LookupExpressionFragments array. This is achieved by marking the element for removal.
     */
    public void removeFromLookupExpressionFragments(entity.LookupExpressionFragment element) {
      __getInternalInterface().removeArrayElement(LOOKUPEXPRESSIONFRAGMENTS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the LookupExpressionFragments array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromLookupExpressionFragments(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(LOOKUPEXPRESSIONFRAGMENTS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ParametersDefinition array. This is achieved by marking the element for removal.
     */
    public void removeFromParametersDefinition(entity.RuleLookupParameterDef element) {
      __getInternalInterface().removeArrayElement(PARAMETERSDEFINITION_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ParametersDefinition array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromParametersDefinition(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(PARAMETERSDEFINITION_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the ValueDefinitionArray array. This is achieved by marking the element for removal.
     */
    public void removeFromValueDefinitionArray(entity.RuleLookupValueDef element) {
      __getInternalInterface().removeArrayElement(VALUEDEFINITIONARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the ValueDefinitionArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromValueDefinitionArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(VALUEDEFINITIONARRAY_PROP.get(), elementID);
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
     * Sets the value of the Description field.
     */
    public void setDescription(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(DESCRIPTION_PROP.get(), value);
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
     * Sets the value of the LookupExpressionFragments field.
     */
    public void setLookupExpressionFragments(entity.LookupExpressionFragment[] value) {
      __getInternalInterface().setFieldValue(LOOKUPEXPRESSIONFRAGMENTS_PROP.get(), value);
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
     * Sets the value of the ParametersDefinition field.
     */
    public void setParametersDefinition(entity.RuleLookupParameterDef[] value) {
      __getInternalInterface().setFieldValue(PARAMETERSDEFINITION_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the TableID field.
     */
    public void setTableID(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(TABLEID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ValueDefinition field.
     */
    public void setValueDefinition(entity.RuleLookupValueDef value) {
      __getInternalInterface().setFieldValue(VALUEDEFINITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ValueDefinitionArray field.
     */
    public void setValueDefinitionArray(entity.RuleLookupValueDef[] value) {
      __getInternalInterface().setFieldValue(VALUEDEFINITIONARRAY_PROP.get(), value);
    }
    
    public void setValueDefinitionID(gw.pl.persistence.core.Key value) {
      setFieldValue(VALUEDEFINITION_PROP.get(), value);
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
    config.put("com.guidewire.bizrules.management.RuleVersionAwareInternal", "com.guidewire.bizrules.management.RuleVersionDependentImpl");
    config.put("com.guidewire.commons.entity.Keyable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.commons.entity.Sourceable", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods", "com.guidewire.pl.system.entity.proxy.AbstractKeyableBeanProxy");
    config.put("com.guidewire.pl.domain.persistence.core.impl.VersionableInternal", "com.guidewire.pl.system.entity.proxy.AbstractVersionableBeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.system.bundle.InsertCallback", "com.guidewire.bizrules.management.RuleVersionDependentImpl");
    config.put("com.guidewire.pl.system.bundle.RemoveCallback", "com.guidewire.bizrules.management.RuleVersionDependentImpl");
    config.put("com.guidewire.pl.system.bundle.UpdateCallback", "com.guidewire.bizrules.management.RuleVersionDependentImpl");
    config.put("com.guidewire.pl.system.entity.PreInitCallback", "com.guidewire.bizrules.management.RuleVersionDependentImpl");
    config.put("gw.bizrules.domain.RuleVersionDependent", "com.guidewire.bizrules.domain.RuleLookupRequestDefImpl");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.RuleLookupRequestDef.class, config);
    com.guidewire._generated.entity.RuleLookupRequestDefInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.RuleLookupRequestDef, com.guidewire._generated.entity.RuleLookupRequestDefInternal>() {
      public java.lang.Object getImplementation(entity.RuleLookupRequestDef bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.RuleLookupRequestDefInternal getInternalInterface(entity.RuleLookupRequestDef bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.RuleLookupRequestDef newEmptyInstance() {
        return new entity.RuleLookupRequestDef((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}