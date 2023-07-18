package entity;

/**
 * PlcyNonPriNamedInsured
 * 
 *     The non-primary person or company directly protected by the policy with full rights and responsibilities.
 *   
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PlcyNonPriNamedInsured.eti;PlcyNonPriNamedInsured.eix;PlcyNonPriNamedInsured.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class PlcyNonPriNamedInsured extends entity.PolicyNamedInsured implements gw.api.copier.EffDatedCopyable {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.PlcyNonPriNamedInsured, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.PlcyNonPriNamedInsured, entity.PolicyPeriod>("entity.PlcyNonPriNamedInsured");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.IColumnPropertyInfo> RELATIONSHIP_PROP = new com.guidewire.commons.metadata.types.ColumnPropertyInfoCache(TYPE, "Relationship");
  
  protected PlcyNonPriNamedInsured(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.PlcyNonPriNamedInsuredInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.PlcyNonPriNamedInsuredInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.PlcyNonPriNamedInsuredInternal)super.__getInternalInterface();
  }
  
  public entity.PlcyNonPriNamedInsured clone() {
    return (entity.PlcyNonPriNamedInsured)__getInternalInterface().cloneUntyped();
  }
  
  public entity.PlcyNonPriNamedInsured getBasedOn() {
    return (entity.PlcyNonPriNamedInsured)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Gets the value of the Relationship field.
   * The relationship to the primary named insured.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public java.lang.String getRelationship() {
    return (java.lang.String)__getInternalInterface().getFieldValueForCodegen(RELATIONSHIP_PROP.get());
  }
  
  public entity.PlcyNonPriNamedInsured getSlice(java.util.Date sliceDate) {
    return (entity.PlcyNonPriNamedInsured)getSliceUntyped(sliceDate);
  }
  
  public entity.PlcyNonPriNamedInsured getUnsliced() {
    return (entity.PlcyNonPriNamedInsured)getUnslicedUntyped();
  }
  
  public entity.windowed.PlcyNonPriNamedInsuredVersionList getVersionList() {
    return (entity.windowed.PlcyNonPriNamedInsuredVersionList)getVersionListUntyped();
  }
  
  /**
   * Sets the value of the Relationship field.
   */
  public void setRelationship(java.lang.String value) {
    __getInternalInterface().setFieldValueForCodegen(RELATIONSHIP_PROP.get(), value);
  }
  
  public entity.PlcyNonPriNamedInsured split(java.util.Date splitDate) {
    return (entity.PlcyNonPriNamedInsured)splitUntyped(splitDate);
  }
  
  static {
    com.guidewire._generated.entity.PlcyNonPriNamedInsuredInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.PlcyNonPriNamedInsured, com.guidewire._generated.entity.PlcyNonPriNamedInsuredInternal>() {
      public java.lang.Object getImplementation(entity.PlcyNonPriNamedInsured bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PlcyNonPriNamedInsuredInternal getInternalInterface(entity.PlcyNonPriNamedInsured bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}