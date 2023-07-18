package entity;

/**
 * WCPolicyContactRole
 * A PolicyContactRole specific to a WorkersComp policy line.
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCPolicyContactRole.eti;WCPolicyContactRole.eix;WCPolicyContactRole.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class WCPolicyContactRole extends entity.PolicyContactRole {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.WCPolicyContactRole, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.WCPolicyContactRole, entity.PolicyPeriod>("entity.WCPolicyContactRole");
  
  public static final gw.pl.persistence.type.EntityPropertyInfoReference<gw.entity.ILinkPropertyInfo> WORKERSCOMPLINE_PROP = new com.guidewire.commons.metadata.types.LinkPropertyInfoCache(TYPE, "WorkersCompLine");
  
  protected WCPolicyContactRole(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.WCPolicyContactRoleInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.WCPolicyContactRoleInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.WCPolicyContactRoleInternal)super.__getInternalInterface();
  }
  
  public entity.WCPolicyContactRole clone() {
    return (entity.WCPolicyContactRole)__getInternalInterface().cloneUntyped();
  }
  
  public entity.WCPolicyContactRole getBasedOn() {
    return (entity.WCPolicyContactRole)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  public entity.WCPolicyContactRole getSlice(java.util.Date sliceDate) {
    return (entity.WCPolicyContactRole)getSliceUntyped(sliceDate);
  }
  
  public entity.WCPolicyContactRole getUnsliced() {
    return (entity.WCPolicyContactRole)getUnslicedUntyped();
  }
  
  public entity.windowed.WCPolicyContactRoleVersionList getVersionList() {
    return (entity.windowed.WCPolicyContactRoleVersionList)getVersionListUntyped();
  }
  
  /**
   * Gets the value of the WorkersCompLine field.
   * The workers comp policy line this contact role is associated with.
   */
  @gw.internal.gosu.parser.ExtendedProperty
  public entity.WorkersCompLine getWorkersCompLine() {
    return (entity.WorkersCompLine)__getInternalInterface().getFieldValue(WORKERSCOMPLINE_PROP.get());
  }
  
  /**
   * Sets the value of the WorkersCompLine field.
   */
  public void setWorkersCompLine(entity.WorkersCompLine value) {
    __getInternalInterface().setFieldValue(WORKERSCOMPLINE_PROP.get(), value);
  }
  
  public entity.WCPolicyContactRole split(java.util.Date splitDate) {
    return (entity.WCPolicyContactRole)splitUntyped(splitDate);
  }
  
  static {
    com.guidewire._generated.entity.WCPolicyContactRoleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.WCPolicyContactRole, com.guidewire._generated.entity.WCPolicyContactRoleInternal>() {
      public java.lang.Object getImplementation(entity.WCPolicyContactRole bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.WCPolicyContactRoleInternal getInternalInterface(entity.WCPolicyContactRole bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}