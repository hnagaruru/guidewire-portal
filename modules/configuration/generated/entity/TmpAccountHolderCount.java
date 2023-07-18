package entity;

/**
 * TmpAccountHolderCount
 * Temp table used to populate column from the AccountHolderCount batch process.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "TmpAccountHolderCount.eti;TmpAccountHolderCount.eix;TmpAccountHolderCount.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
@gw.entity.EntityName(value = "TmpAccountHolderCount")
public class TmpAccountHolderCount extends com.guidewire.pl.persistence.code.BeanBase implements gw.pl.persistence.core.Bean {
  public static final gw.pl.persistence.type.EntityTypeReference<entity.TmpAccountHolderCount> TYPE = new com.guidewire.commons.metadata.types.EntityIntrinsicTypeReference<entity.TmpAccountHolderCount>("entity.TmpAccountHolderCount");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ACTUALVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ActualValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> CURRENTVALUE_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "CurrentValue");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> ID_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "ID");
  
  private com.guidewire.pl.persistence.code.DelegateLoader _delegateManager;
  
  private com.guidewire._generated.entity.TmpAccountHolderCountInternal _internal;
  
  private static final com.guidewire.pl.persistence.code.DelegateMap DELEGATE_MAP;
  
  /**
   * Constructs a new instance of this entity in the {@link gw.transaction.Transaction#getCurrent() current} bundle.
   * @throws java.lang.NullPointerException if there is no current bundle defined
   */
  public TmpAccountHolderCount()  {
    this(gw.transaction.Transaction.getCurrent());
  }
  
  /**
   * Constructs a new instance of this entity in the bundle supplied by the given bundle provider.
   */
  public TmpAccountHolderCount(gw.pl.persistence.core.BundleProvider bundleProvider)  {
    this((java.lang.Void)null);
    com.guidewire.pl.system.entity.proxy.BeanProxy.initNewBeanInstance(this, bundleProvider.getBundle(), java.util.Arrays.asList());
  }
  
  protected TmpAccountHolderCount(java.lang.Void ignored)  {
    
  }
  
  protected com.guidewire._generated.entity.TmpAccountHolderCountInternal __createInternalInterface() {
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
  
  protected com.guidewire._generated.entity.TmpAccountHolderCountInternal __getInternalInterface() {
    if(_internal == null) {
      _internal  =  __createInternalInterface();
    };
    return _internal;
  }
  
  /**
   * Gets the value of the ActualValue field.
   * Number of Accounts on which this Contact is the AccountHolder
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getActualValue() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(ACTUALVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the CurrentValue field.
   * Current (possibly incorrect) value of AccountHolderCount, denormed from Contact
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Integer getCurrentValue() {
    return (java.lang.Integer)__getInternalInterface().getFieldValue(CURRENTVALUE_PROP.get());
  }
  
  /**
   * Gets the value of the ID field.
   * Contact ID
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.Long getID() {
    return (java.lang.Long)__getInternalInterface().getFieldValue(ID_PROP.get());
  }
  
  /**
   * Sets the value of the ActualValue field.
   */
  public void setActualValue(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(ACTUALVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the CurrentValue field.
   */
  public void setCurrentValue(java.lang.Integer value) {
    __getInternalInterface().setFieldValue(CURRENTVALUE_PROP.get(), value);
  }
  
  /**
   * Sets the value of the ID field.
   */
  public void setID(java.lang.Long value) {
    __getInternalInterface().setFieldValue(ID_PROP.get(), value);
  }
  
  private class _Internal extends com.guidewire.pl.persistence.code.BeanInternalBase implements com.guidewire._generated.entity.TmpAccountHolderCountInternal {
    protected com.guidewire.pl.persistence.code.DelegateLoader __getDelegateManager() {
      return entity.TmpAccountHolderCount.this.__getDelegateManager();
    }
    
    /**
     * Gets the value of the ActualValue field.
     * Number of Accounts on which this Contact is the AccountHolder
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getActualValue() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(ACTUALVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the CurrentValue field.
     * Current (possibly incorrect) value of AccountHolderCount, denormed from Contact
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Integer getCurrentValue() {
      return (java.lang.Integer)__getInternalInterface().getFieldValue(CURRENTVALUE_PROP.get());
    }
    
    /**
     * Gets the value of the ID field.
     * Contact ID
     */
    @gw.internal.gosu.parser.ExtendedProperty
    public java.lang.Long getID() {
      return (java.lang.Long)__getInternalInterface().getFieldValue(ID_PROP.get());
    }
    
    /**
     * Sets the value of the ActualValue field.
     */
    public void setActualValue(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(ACTUALVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the CurrentValue field.
     */
    public void setCurrentValue(java.lang.Integer value) {
      __getInternalInterface().setFieldValue(CURRENTVALUE_PROP.get(), value);
    }
    
    /**
     * Sets the value of the ID field.
     */
    public void setID(java.lang.Long value) {
      __getInternalInterface().setFieldValue(ID_PROP.get(), value);
    }
    
    
  }
  
  static {
    java.util.HashMap<java.lang.String, java.lang.String> config = new java.util.HashMap<java.lang.String, java.lang.String>();
    config.put("com.guidewire.pl.domain.persistence.core.impl.BeanInternal", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("com.guidewire.pl.persistence.core.BeanMethods", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.Bean", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("gw.pl.persistence.core.BundleProvider", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    config.put("java.lang.Comparable", "com.guidewire.pl.system.entity.proxy.BeanProxy");
    DELEGATE_MAP  =  com.guidewire.pl.persistence.code.DelegateMap.newInstance(entity.TmpAccountHolderCount.class, config);
    com.guidewire._generated.entity.TmpAccountHolderCountInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.InstantiableEntityFriendAccess<entity.TmpAccountHolderCount, com.guidewire._generated.entity.TmpAccountHolderCountInternal>() {
      public java.lang.Object getImplementation(entity.TmpAccountHolderCount bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.TmpAccountHolderCountInternal getInternalInterface(entity.TmpAccountHolderCount bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      public entity.TmpAccountHolderCount newEmptyInstance() {
        return new entity.TmpAccountHolderCount((java.lang.Void)null);
      }
      
      public void validateImplementations() {
        DELEGATE_MAP.validateImplementations();
      }
      
      
    });
  }
}