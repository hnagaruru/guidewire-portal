package entity;

/**
 * BOPPolicyContactRole
 * A PolicyContactRole specific to a BusinessOwners policy line.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPPolicyContactRole.eti;BOPPolicyContactRole.eix;BOPPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class BOPPolicyContactRole extends entity.PolicyContactRole {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.BOPPolicyContactRole, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.BOPPolicyContactRole, entity.PolicyPeriod>("entity.BOPPolicyContactRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> BUSINESSOWNERSLINE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "BusinessOwnersLine");
  
  protected BOPPolicyContactRole(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.BOPPolicyContactRoleInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.BOPPolicyContactRoleInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.BOPPolicyContactRoleInternal)super.__getInternalInterface();
  }
  
  public entity.BOPPolicyContactRole clone() {
    return (entity.BOPPolicyContactRole)__getInternalInterface().cloneUntyped();
  }
  
  public entity.BOPPolicyContactRole getBasedOn() {
    return (entity.BOPPolicyContactRole)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  /**
   * Gets the value of the BusinessOwnersLine field.
   * The Business Owners policy line this contact role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.BusinessOwnersLine getBusinessOwnersLine() {
    return (entity.BusinessOwnersLine)__getInternalInterface().getFieldValue(BUSINESSOWNERSLINE_PROP.get());
  }
  
  public entity.BOPPolicyContactRole getSlice(java.util.Date sliceDate) {
    return (entity.BOPPolicyContactRole)getSliceUntyped(sliceDate);
  }
  
  public entity.BOPPolicyContactRole getUnsliced() {
    return (entity.BOPPolicyContactRole)getUnslicedUntyped();
  }
  
  public entity.windowed.BOPPolicyContactRoleVersionList getVersionList() {
    return (entity.windowed.BOPPolicyContactRoleVersionList)getVersionListUntyped();
  }
  
  /**
   * Sets the value of the BusinessOwnersLine field.
   */
  public void setBusinessOwnersLine(entity.BusinessOwnersLine value) {
    __getInternalInterface().setFieldValue(BUSINESSOWNERSLINE_PROP.get(), value);
  }
  
  public entity.BOPPolicyContactRole split(java.util.Date splitDate) {
    return (entity.BOPPolicyContactRole)splitUntyped(splitDate);
  }
  
  static {
    com.guidewire._generated.entity.BOPPolicyContactRoleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.BOPPolicyContactRole, com.guidewire._generated.entity.BOPPolicyContactRoleInternal>() {
      public java.lang.Object getImplementation(entity.BOPPolicyContactRole bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.BOPPolicyContactRoleInternal getInternalInterface(entity.BOPPolicyContactRole bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}