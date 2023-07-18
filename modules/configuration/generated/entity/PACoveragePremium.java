package entity;

/**
 * PACoveragePremium
 * A taxable unit of price for a period of time, not to be broken up any further, for a Personal Auto coverage
 */
@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PACoveragePremium.eti;PACoveragePremium.eix;PACoveragePremium.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.internal.gosu.parser.ExtendedType
@gw.lang.SimplePropertyProcessing
public abstract class PACoveragePremium extends entity.PAGeneralPremium {
  public static final gw.pl.persistence.type.EffDatedEntityTypeReference<entity.PACoveragePremium, entity.PolicyPeriod> TYPE = new com.guidewire.commons.metadata.types.EffDatedEntityIntrinsicTypeReference<entity.PACoveragePremium, entity.PolicyPeriod>("entity.PACoveragePremium");
  
  protected PACoveragePremium(java.lang.Void ignored)  {
    super(ignored);
  }
  
  protected abstract com.guidewire._generated.entity.PACoveragePremiumInternal __createInternalInterface();
  
  
  protected com.guidewire._generated.entity.PACoveragePremiumInternal __getInternalInterface() {
    return (com.guidewire._generated.entity.PACoveragePremiumInternal)super.__getInternalInterface();
  }
  
  public entity.PACoveragePremium clone() {
    return (entity.PACoveragePremium)__getInternalInterface().cloneUntyped();
  }
  
  public entity.PACoveragePremium getBasedOn() {
    return (entity.PACoveragePremium)__getInternalInterface().getBasedOnUntyped();
  }
  
  public entity.PolicyPeriod getBranch() {
    return (entity.PolicyPeriod)getBranchUntyped();
  }
  
  public entity.PACoveragePremium getSlice(java.util.Date sliceDate) {
    return (entity.PACoveragePremium)getSliceUntyped(sliceDate);
  }
  
  public entity.PACoveragePremium getUnsliced() {
    return (entity.PACoveragePremium)getUnslicedUntyped();
  }
  
  public entity.windowed.PACoveragePremiumVersionList getVersionList() {
    return (entity.windowed.PACoveragePremiumVersionList)getVersionListUntyped();
  }
  
  public entity.PACoveragePremium split(java.util.Date splitDate) {
    return (entity.PACoveragePremium)splitUntyped(splitDate);
  }
  
  static {
    com.guidewire._generated.entity.PACoveragePremiumInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pl.persistence.code.EntityFriendAccess<entity.PACoveragePremium, com.guidewire._generated.entity.PACoveragePremiumInternal>() {
      public java.lang.Object getImplementation(entity.PACoveragePremium bean, java.lang.String interfaceName) {
        return bean.__getDelegateManager().getImplementation(interfaceName);
      }
      
      public com.guidewire._generated.entity.PACoveragePremiumInternal getInternalInterface(entity.PACoveragePremium bean) {
        if(bean == null) {
          return null;
        };
        return bean.__getInternalInterface();
      }
      
      
    });
  }
}