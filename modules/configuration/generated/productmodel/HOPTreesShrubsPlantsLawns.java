package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPTreesShrubsPlantsLawns.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPTreesShrubsPlantsLawns extends entity.HOPDwellingCov {
  protected HOPTreesShrubsPlantsLawns()  {
    super((java.lang.Void)null);
  }
  
  public HOPTreesShrubsPlantsLawns(entity.PolicyPeriod branch)  {
    super(branch, "z19ia8ibe31cierblikntvppe68");
  }
  
  public HOPTreesShrubsPlantsLawns(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z19ia8ibe31cierblikntvppe68");
  }
  
  public productmodel.PackageHOPTreesShrubsPlantsLawnsLimitType getHOPTreesShrubsPlantsLawnsLimitTerm() {
    return (productmodel.PackageHOPTreesShrubsPlantsLawnsLimitType)getCovTerm("zhdic49albr924jec7klvulhoa8");
  }
  
  public boolean getHasHOPTreesShrubsPlantsLawnsLimitTerm() {
    return hasCovTerm("zhdic49albr924jec7klvulhoa8");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPTreesShrubsPlantsLawnsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPTreesShrubsPlantsLawns>() {
      public productmodel.HOPTreesShrubsPlantsLawns newEmptyInstance() {
        return new productmodel.HOPTreesShrubsPlantsLawns();
      }
      
      
    });
  }
}