package entity;

/**
 * RateTableMatchOpDefinition
 * The table holds metadata information for a matching operation used to query the associated rate table
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateTableMatchOpDefinition.eti;RateTableMatchOpDefinition.eix;RateTableMatchOpDefinition.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "RateTableMatchOpDefinition")
public class RateTableMatchOpDefinition extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RateTableMatchOpDefinition> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RateTableMatchOpDefinition>("entity.RateTableMatchOpDefinition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ALLOWEDPARAMETERTYPES_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "AllowedParameterTypes");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> DEPRECATED_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Deprecated");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> IMPLCLASS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ImplClass");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> MATCHOPS_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "MatchOps");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NUMBEROFPARAMETERS_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NumberOfParameters");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPCODE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OpCode");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPDESC_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OpDesc");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> OPDESC_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "OpDesc_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> OPNAME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "OpName");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> OPNAME_L10N_ARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "OpName_L10N_ARRAY");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> SORTORDER_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "SortOrder");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.RateTableMatchOpDefinitionInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public RateTableMatchOpDefinition()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public RateTableMatchOpDefinition(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected RateTableMatchOpDefinition(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.RateTableMatchOpDefinitionInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.RateTableMatchOpDefinitionInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Adds the given element to the MatchOps array. This is achieved by setting the parent foreign key to this entity instance.
   */
  public void addToMatchOps(entity.RateTableMatchOp element) {
    __getInternalInterface().addArrayElement(MATCHOPS_PROP.get(), element);
  }
  
  /**
   * 
   * @return A copy of the current bean and a deep copy of all owned array elements
   */
  public entity.KeyableBean copy() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).copy();
  }
  
  /**
   * Gets the value of the AllowedParameterTypes field.
   * Parameter for this Match Operation allowed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getAllowedParameterTypes() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ALLOWEDPARAMETERTYPES_PROP.get());
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
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the ImplClass field.
   * Fully qualified name of the class implementing this match operation
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getImplClass() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(IMPLCLASS_PROP.get());
  }
  
  /**
   * Gets the value of the MatchOps field.
   * The list of match operations using this match operation definition
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableMatchOp[] getMatchOps() {
    return (entity.RateTableMatchOp[])__getInternalInterface().getFieldValue(MATCHOPS_PROP.get());
  }
  
  /**
   * Gets the value of the NumberOfParameters field.
   * Numbers of parameters allowed
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNumberOfParameters() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMBEROFPARAMETERS_PROP.get());
  }
  
  /**
   * Gets the value of the OpCode field.
   * Match operation code
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOpCode() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OPCODE_PROP.get());
  }
  
  /**
   * Gets the value of the OpDesc field.
   * Description of the Match operation applied to a rate table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOpDesc() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OPDESC_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableMatchOpDefinition_OpDesc_L10N[] getOpDesc_L10N_ARRAY() {
    return (entity.RateTableMatchOpDefinition_OpDesc_L10N[])__getInternalInterface().getFieldValue(OPDESC_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array OpDesc_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOpDesc_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("OpDesc_en_US"));
  }
  
  /**
   * Gets the value of the OpName field.
   * Name of the Match operation applied to a rate table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOpName() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OPNAME_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableMatchOpDefinition_OpName_L10N[] getOpName_L10N_ARRAY() {
    return (entity.RateTableMatchOpDefinition_OpName_L10N[])__getInternalInterface().getFieldValue(OPNAME_L10N_ARRAY_PROP.get());
  }
  
  /**
   * Array association accessor for key en_US on array OpName_L10N_ARRAY
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getOpName_en_US() {
    return (java.lang.String)__getInternalInterface().getLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("OpName_en_US"));
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
   * Gets the value of the SortOrder field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getSortOrder() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(SORTORDER_PROP.get());
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
   * Gets the value of the Deprecated field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isDeprecated() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(DEPRECATED_PROP.get());
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
   * Removes the given element from the MatchOps array. This is achieved by marking the element for removal.
   */
  public void removeFromMatchOps(entity.RateTableMatchOp element) {
    __getInternalInterface().removeArrayElement(MATCHOPS_PROP.get(), element);
  }
  
  /**
   * Removes the given element from the MatchOps array. This is achieved by marking the element for removal.
   * @deprecated Please use the version that takes an entity instead.
   */
  @java.lang.Deprecated
  public void removeFromMatchOps(gw.pl.persistence.core.Key elementID) {
    __getInternalInterface().removeArrayElement(MATCHOPS_PROP.get(), elementID);
  }
  
  /**
   * Sets the value of the AllowedParameterTypes field.
   */
  public void setAllowedParameterTypes(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(ALLOWEDPARAMETERTYPES_PROP.get(), value);
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
   * Sets the value of the Deprecated field.
   */
  public void setDeprecated(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(DEPRECATED_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ImplClass field.
   */
  public void setImplClass(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(IMPLCLASS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the MatchOps field.
   */
  public void setMatchOps(entity.RateTableMatchOp[] value) {
    __getInternalInterface().setFieldValue(MATCHOPS_PROP.get(), value);
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
   * Sets the value of the NumberOfParameters field.
   */
  public void setNumberOfParameters(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NUMBEROFPARAMETERS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpCode field.
   */
  public void setOpCode(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OPCODE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpDesc field.
   */
  public void setOpDesc(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OPDESC_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpDesc_L10N_ARRAY field.
   */
  private void setOpDesc_L10N_ARRAY(entity.RateTableMatchOpDefinition_OpDesc_L10N[] value) {
    __getInternalInterface().setFieldValue(OPDESC_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key OpDesc_ on array OpDesc_L10N_ARRAY
   */
  public void setOpDesc_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("OpDesc_en_US"), value);
  }
  
  /**
   * Sets the value of the OpName field.
   */
  public void setOpName(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(OPNAME_PROP.get(), value);
  }
  
  /**
   * Sets the value of the OpName_L10N_ARRAY field.
   */
  private void setOpName_L10N_ARRAY(entity.RateTableMatchOpDefinition_OpName_L10N[] value) {
    __getInternalInterface().setFieldValue(OPNAME_L10N_ARRAY_PROP.get(), value);
  }
  
  /**
   * Array association mutator for key OpName_ on array OpName_L10N_ARRAY
   */
  public void setOpName_en_US(java.lang.String value) {
    __getInternalInterface().setLocalizedFieldValueForCodeGen((com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo)TYPE.get().getTypeInfo().getProperty("OpName_en_US"), value);
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
   * Sets the value of the SortOrder field.
   */
  public void setSortOrder(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(SORTORDER_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.RateTableMatchOpDefinitionInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.RateTableMatchOpDefinition.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the MatchOps array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToMatchOps(entity.RateTableMatchOp element) {
      __getInternalInterface().addArrayElement(MATCHOPS_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the OpDesc_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToOpDesc_L10N_ARRAY(entity.RateTableMatchOpDefinition_OpDesc_L10N element) {
      __getInternalInterface().addArrayElement(OPDESC_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the OpName_L10N_ARRAY array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToOpName_L10N_ARRAY(entity.RateTableMatchOpDefinition_OpName_L10N element) {
      __getInternalInterface().addArrayElement(OPNAME_L10N_ARRAY_PROP.get(), element);
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
     * Gets the value of the AllowedParameterTypes field.
     * Parameter for this Match Operation allowed
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getAllowedParameterTypes() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(ALLOWEDPARAMETERTYPES_PROP.get());
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
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public gw.pl.persistence.core.Key getID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
    }
    
    public gw.pl.persistence.core.Key getIdToSetForForeignKey(gw.entity.ILinkPropertyInfo link) {
      return ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).getIdToSetForForeignKey(link);
    }
    
    /**
     * Gets the value of the ImplClass field.
     * Fully qualified name of the class implementing this match operation
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getImplClass() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(IMPLCLASS_PROP.get());
    }
    
    /**
     * Gets the value of the MatchOps field.
     * The list of match operations using this match operation definition
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateTableMatchOp[] getMatchOps() {
      return (entity.RateTableMatchOp[])__getInternalInterface().getFieldValue(MATCHOPS_PROP.get());
    }
    
    /**
     * Gets the value of the NumberOfParameters field.
     * Numbers of parameters allowed
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNumberOfParameters() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NUMBEROFPARAMETERS_PROP.get());
    }
    
    /**
     * Gets the value of the OpCode field.
     * Match operation code
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOpCode() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OPCODE_PROP.get());
    }
    
    /**
     * Gets the value of the OpDesc field.
     * Description of the Match operation applied to a rate table
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOpDesc() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OPDESC_PROP.get());
    }
    
    /**
     * Gets the value of the OpDesc_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateTableMatchOpDefinition_OpDesc_L10N[] getOpDesc_L10N_ARRAY() {
      return (entity.RateTableMatchOpDefinition_OpDesc_L10N[])__getInternalInterface().getFieldValue(OPDESC_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition OpDesc_L10N_ARRAYByLanguage on array OpDesc_L10N_ARRAY
     */
    public entity.RateTableMatchOpDefinition_OpDesc_L10N getOpDesc_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.RateTableMatchOpDefinition_OpDesc_L10N)__getInternalInterface().getAssociativeArrayValue(property);
    }
    
    /**
     * Gets the value of the OpName field.
     * Name of the Match operation applied to a rate table
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getOpName() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(OPNAME_PROP.get());
    }
    
    /**
     * Gets the value of the OpName_L10N_ARRAY field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateTableMatchOpDefinition_OpName_L10N[] getOpName_L10N_ARRAY() {
      return (entity.RateTableMatchOpDefinition_OpName_L10N[])__getInternalInterface().getFieldValue(OPNAME_L10N_ARRAY_PROP.get());
    }
    
    /**
     * Array association for partition OpName_L10N_ARRAYByLanguage on array OpName_L10N_ARRAY
     */
    public entity.RateTableMatchOpDefinition_OpName_L10N getOpName_L10N_ARRAYByLanguage(com.guidewire.commons.entity.type2.IAssociativeArrayPropertyInfo property) {
      return (entity.RateTableMatchOpDefinition_OpName_L10N)__getInternalInterface().getAssociativeArrayValue(property);
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
     * Gets the value of the SortOrder field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getSortOrder() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(SORTORDER_PROP.get());
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
     * Gets the value of the Deprecated field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isDeprecated() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(DEPRECATED_PROP.get());
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
     * Removes the given element from the MatchOps array. This is achieved by marking the element for removal.
     */
    public void removeFromMatchOps(entity.RateTableMatchOp element) {
      __getInternalInterface().removeArrayElement(MATCHOPS_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the MatchOps array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromMatchOps(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(MATCHOPS_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the OpDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromOpDesc_L10N_ARRAY(entity.RateTableMatchOpDefinition_OpDesc_L10N element) {
      __getInternalInterface().removeArrayElement(OPDESC_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the OpDesc_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromOpDesc_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(OPDESC_L10N_ARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the OpName_L10N_ARRAY array. This is achieved by marking the element for removal.
     */
    public void removeFromOpName_L10N_ARRAY(entity.RateTableMatchOpDefinition_OpName_L10N element) {
      __getInternalInterface().removeArrayElement(OPNAME_L10N_ARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the OpName_L10N_ARRAY array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromOpName_L10N_ARRAY(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(OPNAME_L10N_ARRAY_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the AllowedParameterTypes field.
     */
    public void setAllowedParameterTypes(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(ALLOWEDPARAMETERTYPES_PROP.get(), value);
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
     * Sets the value of the Deprecated field.
     */
    public void setDeprecated(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(DEPRECATED_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ImplClass field.
     */
    public void setImplClass(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(IMPLCLASS_PROP.get(), value);
    }
    
    public void setLazyLoadedRow() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).setLazyLoadedRow();
    }
    
    /**
     * Sets the value of the MatchOps field.
     */
    public void setMatchOps(entity.RateTableMatchOp[] value) {
      __getInternalInterface().setFieldValue(MATCHOPS_PROP.get(), value);
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
     * Sets the value of the NumberOfParameters field.
     */
    public void setNumberOfParameters(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NUMBEROFPARAMETERS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpCode field.
     */
    public void setOpCode(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(OPCODE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpDesc field.
     */
    public void setOpDesc(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(OPDESC_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpDesc_L10N_ARRAY field.
     */
    public void setOpDesc_L10N_ARRAY(entity.RateTableMatchOpDefinition_OpDesc_L10N[] value) {
      __getInternalInterface().setFieldValue(OPDESC_L10N_ARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpName field.
     */
    public void setOpName(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(OPNAME_PROP.get(), value);
    }
    
    /**
     * Sets the value of the OpName_L10N_ARRAY field.
     */
    public void setOpName_L10N_ARRAY(entity.RateTableMatchOpDefinition_OpName_L10N[] value) {
      __getInternalInterface().setFieldValue(OPNAME_L10N_ARRAY_PROP.get(), value);
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
     * Sets the value of the SortOrder field.
     */
    public void setSortOrder(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(SORTORDER_PROP.get(), value);
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
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.RateTableMatchOpDefinition.class, config);
    com.guidewire._generated.entity.RateTableMatchOpDefinitionInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.RateTableMatchOpDefinition, com.guidewire._generated.entity.RateTableMatchOpDefinitionInternal>() {
      public java.lang.Object getImplementation(entity.RateTableMatchOpDefinition bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.RateTableMatchOpDefinitionInternal getInternalInterface(entity.RateTableMatchOpDefinition bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.RateTableMatchOpDefinition newEmptyInstance() {
        return new entity.RateTableMatchOpDefinition((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}