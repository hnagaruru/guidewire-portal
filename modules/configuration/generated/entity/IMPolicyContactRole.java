package entity;

/**
 * IMPolicyContactRole
 * A PolicyContactRole specific to an InlandMarine policy line.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMPolicyContactRole.eti;IMPolicyContactRole.eix;IMPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class IMPolicyContactRole extends entity.PolicyContactRole {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.IMPolicyContactRole, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.IMPolicyContactRole, entity.PolicyPeriod>("entity.IMPolicyContactRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> INLANDMARINELINE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "InlandMarineLine");
  
  protected IMPolicyContactRole(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.IMPolicyContactRoleInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.IMPolicyContactRoleInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.IMPolicyContactRoleInternal)super.__getInternalInterface();
  }
  
  public entity.IMPolicyContactRole clone() {
    return (entity.IMPolicyContactRole)__getInternalInterface().cloneUntyped();
  }
  
  public entity.IMPolicyContactRole getBasedOn() {
    return (entity.IMPolicyContactRole)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Gets the value of the InlandMarineLine field.
   * The Inland Marine policy line this contact role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.InlandMarineLine getInlandMarineLine() {
    return (entity.InlandMarineLine)__getInternalInterface().getFieldValue(INLANDMARINELINE_PROP.get());
  }
  
  public entity.IMPolicyContactRole getSlice(java.util.Date sliceDate) {
    return (entity.IMPolicyContactRole)getSliceUntyped(sliceDate);
  }
  
  public entity.IMPolicyContactRole getUnsliced() {
    return (entity.IMPolicyContactRole)getUnslicedUntyped();
  }
  
  public entity.windowed.IMPolicyContactRoleVersionList getVersionList() {
    return (entity.windowed.IMPolicyContactRoleVersionList)getVersionListUntyped();
  }
  
  /**
   * Sets the value of the InlandMarineLine field.
   */
  public void setInlandMarineLine(entity.InlandMarineLine value) {
    __getInternalInterface().setFieldValue(INLANDMARINELINE_PROP.get(), value);
  }
  
  public entity.IMPolicyContactRole split(java.util.Date splitDate) {
    return (entity.IMPolicyContactRole)splitUntyped(splitDate);
  }
  
  static {
    com.guidewire._generated.entity.IMPolicyContactRoleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.IMPolicyContactRole, com.guidewire._generated.entity.IMPolicyContactRoleInternal>() {
      public java.lang.Object getImplementation(entity.IMPolicyContactRole bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.IMPolicyContactRoleInternal getInternalInterface(entity.IMPolicyContactRole bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}