package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPReward.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPReward extends entity.HOPLineCov {
  protected HOPReward()  {
    super((java.lang.Void)null);
  }
  
  public HOPReward(entity.PolicyPeriod branch)  {
    super(branch, "zuhiksn15sd0g53anl8v0pu45db");
  }
  
  public HOPReward(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zuhiksn15sd0g53anl8v0pu45db");
  }
  
  public productmodel.PackageHOPRewardArsonOrRecoveredPropLimitType getHOPRewardArsonOrRecoveredPropLimitTerm() {
    return (productmodel.PackageHOPRewardArsonOrRecoveredPropLimitType)getCovTerm("zneh8p1jbds7ud09i345kbu50sa");
  }
  
  public productmodel.PackageHOPRewardTheftConvictionLimitType getHOPRewardTheftConvictionLimitTerm() {
    return (productmodel.PackageHOPRewardTheftConvictionLimitType)getCovTerm("zfigedt82ie1129tk1tql0j49e8");
  }
  
  public boolean getHasHOPRewardArsonOrRecoveredPropLimitTerm() {
    return hasCovTerm("zneh8p1jbds7ud09i345kbu50sa");
  }
  
  public boolean getHasHOPRewardTheftConvictionLimitTerm() {
    return hasCovTerm("zfigedt82ie1129tk1tql0j49e8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPRewardInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPReward>() {
      public productmodel.HOPReward newEmptyInstance() {
        return new productmodel.HOPReward();
      }
      
      
    });
  }
}