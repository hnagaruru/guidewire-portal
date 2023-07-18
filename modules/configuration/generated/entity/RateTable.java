package entity;

/**
 * RateTable
 * Identifies logical rate table.  Logical rate table is associated with a single rate books and may either own or reference rate factors.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "RateTable.eti;RateTable.eix;RateTable.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "RateTable")
public class RateTable extends com.guidewire.pl.persistence.code.BeanBase implements entity.Retireable {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.RateTable> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.RateTable>("entity.RateTable");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BASEDONTABLE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BasedOnTable");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> BEANVERSION_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "BeanVersion");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CHECKSUM_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Checksum");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CREATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CreateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> CREATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "CreateUser");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> DEFINITION_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "Definition");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> LASTTABLEROWEDIT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "LastTableRowEdit");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> NORMALIZEDROWCOUNT_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "NormalizedRowCount");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> PUBLICID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "PublicID");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> QUERYSTRATEGY_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "QueryStrategy");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> RATEBOOK_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "RateBook");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> REDUCEMEMORYUSAGE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ReduceMemoryUsage");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> REFTABLE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "RefTable");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIREDVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "RetiredValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ITypekeyPropertyInfo> ROWUNIFORMITYSTATUS_PROP = new com.guidewire.commons.metadata.types.TypekeyPropertyInfoCache(TYPE, "RowUniformityStatus");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> RTOWNERSHIPARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RtownershipArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IArrayPropertyInfo> RTREFOWNERSHIPARRAY_PROP = new com.guidewire.commons.metadata.types.ArrayPropertyInfoCache(TYPE, "RtrefownershipArray");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> UPDATETIME_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "UpdateTime");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> UPDATEUSER_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "UpdateUser");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.RateTableInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  public static final gw.pl.persistence.type.DynamicEntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RETIRED_DYNPROP = com.guidewire.pl.domain.persistence.core.RetireablePublicMethods.RETIRED_DYNPROP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public RateTable()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public RateTable(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected RateTable(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.RateTableInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.RateTableInternal __getInternalInterface() {
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
   * Gets the value of the BasedOnTable field.
   * Defines ownership of the factors in this table. Null value indicate tha factors are owned by the table.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTable getBasedOnTable() {
    return (entity.RateTable)__getInternalInterface().getFieldValue(BASEDONTABLE_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getBeanVersion() {
    return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
  }
  
  /**
   * Gets the value of the Checksum field.
   * Checksum for all parameters and factors associated with this rate table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getChecksum() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHECKSUM_PROP.get());
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
   * Gets the value of the Definition field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTableDefinition getDefinition() {
    return (entity.RateTableDefinition)__getInternalInterface().getFieldValue(DEFINITION_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public gw.pl.persistence.core.Key getID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getID();
  }
  
  /**
   * Gets the value of the LastTableRowEdit field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.util.Date getLastTableRowEdit() {
    return (java.util.Date)__getInternalInterface().getFieldValue(LASTTABLEROWEDIT_PROP.get());
  }
  
  public java.util.List<entity.KeyableBean> getNewRowsFromBundle() {
    return ((com.guidewire.pc.domain.rating.RateTablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTablePublicMethods")).getNewRowsFromBundle();
  }
  
  /**
   * Gets the value of the NormalizedRowCount field.
   * An estimated total number of rows that would be created if the table uses range normalization
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getNormalizedRowCount() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(NORMALIZEDROWCOUNT_PROP.get());
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getPublicID() {
    return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
  }
  
  /**
   * Gets the value of the QueryStrategy field.
   * Define the factor query strategy for this table
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.FactorQueryStrategy getQueryStrategy() {
    return (typekey.FactorQueryStrategy)__getInternalInterface().getFieldValue(QUERYSTRATEGY_PROP.get());
  }
  
  /**
   * Gets the value of the RateBook field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateBook getRateBook() {
    return (entity.RateBook)__getInternalInterface().getFieldValue(RATEBOOK_PROP.get());
  }
  
  /**
   * Gets the value of the RefTable field.
   * Defines ownership of the factors in this table. Null value indicate tha factors are owned by the table.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.RateTable getRefTable() {
    return (entity.RateTable)__getInternalInterface().getFieldValue(REFTABLE_PROP.get());
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
   * Gets the value of the RowUniformityStatus field.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public typekey.RowUniformityStatus getRowUniformityStatus() {
    return (typekey.RowUniformityStatus)__getInternalInterface().getFieldValue(ROWUNIFORMITYSTATUS_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Rtownership[] getRtownershipArray() {
    return (entity.Rtownership[])__getInternalInterface().getFieldValue(RTOWNERSHIPARRAY_PROP.get());
  }
  
  /**
   * 
   * @deprecated This field is not intended to be accessed directly. This method may be removed in a future release.
   */
  @java.lang.Deprecated
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.Rtrefownership[] getRtrefownershipArray() {
    return (entity.Rtrefownership[])__getInternalInterface().getFieldValue(RTREFOWNERSHIPARRAY_PROP.get());
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
  
  public boolean hasInsertedFactors() {
    return ((com.guidewire.pc.domain.rating.RateTablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTablePublicMethods")).hasInsertedFactors();
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
   * Gets the value of the ReduceMemoryUsage field.
   * Signifies that the user set this table to not auto normalize
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Boolean isReduceMemoryUsage() {
    return (java.lang.Boolean)__getInternalInterface().getFieldValue(REDUCEMEMORYUSAGE_PROP.get());
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
   * Sets the value of the BasedOnTable field.
   */
  public void setBasedOnTable(entity.RateTable value) {
    __getInternalInterface().setFieldValue(BASEDONTABLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the BeanVersion field.
   */
  private void setBeanVersion(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the Checksum field.
   */
  public void setChecksum(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(CHECKSUM_PROP.get(), value);
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
   * Sets the value of the Definition field.
   */
  public void setDefinition(entity.RateTableDefinition value) {
    __getInternalInterface().setFieldValue(DEFINITION_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  private void setID(gw.pl.persistence.core.Key value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  /**
   * Sets the value of the LastTableRowEdit field.
   */
  public void setLastTableRowEdit(java.util.Date value) {
    __getInternalInterface().setFieldValue(LASTTABLEROWEDIT_PROP.get(), value);
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
   * Sets the value of the NormalizedRowCount field.
   */
  public void setNormalizedRowCount(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(NORMALIZEDROWCOUNT_PROP.get(), value);
  }
  
  @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
  public void setPublicID(java.lang.String id) {
    ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
  }
  
  /**
   * Sets the value of the QueryStrategy field.
   */
  public void setQueryStrategy(typekey.FactorQueryStrategy value) {
    __getInternalInterface().setFieldValue(QUERYSTRATEGY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RateBook field.
   */
  public void setRateBook(entity.RateBook value) {
    __getInternalInterface().setFieldValue(RATEBOOK_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ReduceMemoryUsage field.
   */
  public void setReduceMemoryUsage(java.lang.Boolean value) {
    __getInternalInterface().setFieldValue(REDUCEMEMORYUSAGE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RefTable field.
   */
  public void setRefTable(entity.RateTable value) {
    __getInternalInterface().setFieldValue(REFTABLE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RetiredValue field.
   */
  private void setRetiredValue(java.lang.Long value) {
    __getInternalInterface().setFieldValue(RETIREDVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RowUniformityStatus field.
   */
  public void setRowUniformityStatus(typekey.RowUniformityStatus value) {
    __getInternalInterface().setFieldValue(ROWUNIFORMITYSTATUS_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RtownershipArray field.
   */
  private void setRtownershipArray(entity.Rtownership[] value) {
    __getInternalInterface().setFieldValue(RTOWNERSHIPARRAY_PROP.get(), value);
  }
  
  /**
   * Sets the value of the RtrefownershipArray field.
   */
  private void setRtrefownershipArray(entity.Rtrefownership[] value) {
    __getInternalInterface().setFieldValue(RTREFOWNERSHIPARRAY_PROP.get(), value);
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
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.RateTableInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.RateTable.this.__getDelegateManager();
    }
    
    /**
     * Adds the given element to the RtownershipArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRtownershipArray(entity.Rtownership element) {
      __getInternalInterface().addArrayElement(RTOWNERSHIPARRAY_PROP.get(), element);
    }
    
    /**
     * Adds the given element to the RtrefownershipArray array. This is achieved by setting the parent foreign key to this entity instance.
     */
    public void addToRtrefownershipArray(entity.Rtrefownership element) {
      __getInternalInterface().addArrayElement(RTREFOWNERSHIPARRAY_PROP.get(), element);
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
     * Gets the value of the BasedOnTable field.
     * Defines ownership of the factors in this table. Null value indicate tha factors are owned by the table.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateTable getBasedOnTable() {
      return (entity.RateTable)__getInternalInterface().getFieldValue(BASEDONTABLE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getBasedOnTableID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(BASEDONTABLE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getBeanVersion() {
      return ((com.guidewire.pl.domain.persistence.core.VersionablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.VersionablePublicMethods")).getBeanVersion();
    }
    
    /**
     * Gets the value of the Checksum field.
     * Checksum for all parameters and factors associated with this rate table
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getChecksum() {
      return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(CHECKSUM_PROP.get());
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
     * Gets the value of the Definition field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateTableDefinition getDefinition() {
      return (entity.RateTableDefinition)__getInternalInterface().getFieldValue(DEFINITION_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getDefinitionID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(DEFINITION_PROP.get());
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
     * Gets the value of the LastTableRowEdit field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.util.Date getLastTableRowEdit() {
      return (java.util.Date)__getInternalInterface().getFieldValue(LASTTABLEROWEDIT_PROP.get());
    }
    
    public java.util.List<entity.KeyableBean> getNewRowsFromBundle() {
      return ((com.guidewire.pc.domain.rating.RateTablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTablePublicMethods")).getNewRowsFromBundle();
    }
    
    /**
     * Gets the value of the NormalizedRowCount field.
     * An estimated total number of rows that would be created if the table uses range normalization
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getNormalizedRowCount() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(NORMALIZEDROWCOUNT_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.String getPublicID() {
      return ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).getPublicID();
    }
    
    /**
     * Gets the value of the QueryStrategy field.
     * Define the factor query strategy for this table
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.FactorQueryStrategy getQueryStrategy() {
      return (typekey.FactorQueryStrategy)__getInternalInterface().getFieldValue(QUERYSTRATEGY_PROP.get());
    }
    
    /**
     * Gets the value of the RateBook field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateBook getRateBook() {
      return (entity.RateBook)__getInternalInterface().getFieldValue(RATEBOOK_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getRateBookID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(RATEBOOK_PROP.get());
    }
    
    /**
     * Gets the value of the RefTable field.
     * Defines ownership of the factors in this table. Null value indicate tha factors are owned by the table.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.RateTable getRefTable() {
      return (entity.RateTable)__getInternalInterface().getFieldValue(REFTABLE_PROP.get());
    }
    
    public gw.pl.persistence.core.Key getRefTableID() {
      return (gw.pl.persistence.core.Key)getRawFieldValue(REFTABLE_PROP.get());
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getRetiredValue() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).getRetiredValue();
    }
    
    /**
     * Gets the value of the RowUniformityStatus field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public typekey.RowUniformityStatus getRowUniformityStatus() {
      return (typekey.RowUniformityStatus)__getInternalInterface().getFieldValue(ROWUNIFORMITYSTATUS_PROP.get());
    }
    
    /**
     * Gets the value of the RtownershipArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Rtownership[] getRtownershipArray() {
      return (entity.Rtownership[])__getInternalInterface().getFieldValue(RTOWNERSHIPARRAY_PROP.get());
    }
    
    /**
     * Gets the value of the RtrefownershipArray field.
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public entity.Rtrefownership[] getRtrefownershipArray() {
      return (entity.Rtrefownership[])__getInternalInterface().getFieldValue(RTREFOWNERSHIPARRAY_PROP.get());
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
    
    public boolean hasInsertedFactors() {
      return ((com.guidewire.pc.domain.rating.RateTablePublicMethods)__getDelegateManager().getImplementation("com.guidewire.pc.domain.rating.RateTablePublicMethods")).hasInsertedFactors();
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
    
    public boolean isOkToRetire() {
      return ((com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.RetireableInternalMethods")).isOkToRetire();
    }
    
    /**
     * Gets the value of the ReduceMemoryUsage field.
     * Signifies that the user set this table to not auto normalize
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Boolean isReduceMemoryUsage() {
      return (java.lang.Boolean)__getInternalInterface().getFieldValue(REDUCEMEMORYUSAGE_PROP.get());
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
     * Removes the given element from the RtownershipArray array. This is achieved by marking the element for removal.
     */
    public void removeFromRtownershipArray(entity.Rtownership element) {
      __getInternalInterface().removeArrayElement(RTOWNERSHIPARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RtownershipArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRtownershipArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RTOWNERSHIPARRAY_PROP.get(), elementID);
    }
    
    /**
     * Removes the given element from the RtrefownershipArray array. This is achieved by marking the element for removal.
     */
    public void removeFromRtrefownershipArray(entity.Rtrefownership element) {
      __getInternalInterface().removeArrayElement(RTREFOWNERSHIPARRAY_PROP.get(), element);
    }
    
    /**
     * Removes the given element from the RtrefownershipArray array. This is achieved by marking the element for removal.
     * @deprecated Please use the version that takes an entity instead.
     */
    @java.lang.Deprecated
    public void removeFromRtrefownershipArray(gw.pl.persistence.core.Key elementID) {
      __getInternalInterface().removeArrayElement(RTREFOWNERSHIPARRAY_PROP.get(), elementID);
    }
    
    public void removed() {
      ((com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.impl.KeyableBeanInternalMethods")).removed();
    }
    
    /**
     * Sets the value of the BasedOnTable field.
     */
    public void setBasedOnTable(entity.RateTable value) {
      __getInternalInterface().setFieldValue(BASEDONTABLE_PROP.get(), value);
    }
    
    public void setBasedOnTableID(gw.pl.persistence.core.Key value) {
      setFieldValue(BASEDONTABLE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the BeanVersion field.
     */
    public void setBeanVersion(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(BEANVERSION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the Checksum field.
     */
    public void setChecksum(java.lang.String value) {
      __getInternalInterface().setFieldValueForCodegen(CHECKSUM_PROP.get(), value);
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
     * Sets the value of the Definition field.
     */
    public void setDefinition(entity.RateTableDefinition value) {
      __getInternalInterface().setFieldValue(DEFINITION_PROP.get(), value);
    }
    
    public void setDefinitionID(gw.pl.persistence.core.Key value) {
      setFieldValue(DEFINITION_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(gw.pl.persistence.core.Key value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    /**
     * Sets the value of the LastTableRowEdit field.
     */
    public void setLastTableRowEdit(java.util.Date value) {
      __getInternalInterface().setFieldValue(LASTTABLEROWEDIT_PROP.get(), value);
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
     * Sets the value of the NormalizedRowCount field.
     */
    public void setNormalizedRowCount(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(NORMALIZEDROWCOUNT_PROP.get(), value);
    }
    
    @com.guidewire.pl.persistence.codegen.annotation.OverridesAccessor
    public void setPublicID(java.lang.String id) {
      ((com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods)__getDelegateManager().getImplementation("com.guidewire.pl.domain.persistence.core.KeyableBeanPublicMethods")).setPublicID(id);
    }
    
    /**
     * Sets the value of the QueryStrategy field.
     */
    public void setQueryStrategy(typekey.FactorQueryStrategy value) {
      __getInternalInterface().setFieldValue(QUERYSTRATEGY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RateBook field.
     */
    public void setRateBook(entity.RateBook value) {
      __getInternalInterface().setFieldValue(RATEBOOK_PROP.get(), value);
    }
    
    public void setRateBookID(gw.pl.persistence.core.Key value) {
      setFieldValue(RATEBOOK_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ReduceMemoryUsage field.
     */
    public void setReduceMemoryUsage(java.lang.Boolean value) {
      __getInternalInterface().setFieldValue(REDUCEMEMORYUSAGE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RefTable field.
     */
    public void setRefTable(entity.RateTable value) {
      __getInternalInterface().setFieldValue(REFTABLE_PROP.get(), value);
    }
    
    public void setRefTableID(gw.pl.persistence.core.Key value) {
      setFieldValue(REFTABLE_PROP.get(), value);
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
     * Sets the value of the RowUniformityStatus field.
     */
    public void setRowUniformityStatus(typekey.RowUniformityStatus value) {
      __getInternalInterface().setFieldValue(ROWUNIFORMITYSTATUS_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RtownershipArray field.
     */
    public void setRtownershipArray(entity.Rtownership[] value) {
      __getInternalInterface().setFieldValue(RTOWNERSHIPARRAY_PROP.get(), value);
    }
    
    /**
     * Sets the value of the RtrefownershipArray field.
     */
    public void setRtrefownershipArray(entity.Rtrefownership[] value) {
      __getInternalInterface().setFieldValue(RTREFOWNERSHIPARRAY_PROP.get(), value);
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
    config.put("com.guidewire.pc.domain.rating.RateTablePublicMethods", "com.guidewire.pc.domain.rating.impl.RateTableImpl");
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
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.RateTable.class, config);
    com.guidewire._generated.entity.RateTableInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.RateTable, com.guidewire._generated.entity.RateTableInternal>() {
      public java.lang.Object getImplementation(entity.RateTable bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.RateTableInternal getInternalInterface(entity.RateTable bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.RateTable newEmptyInstance() {
        return new entity.RateTable((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}