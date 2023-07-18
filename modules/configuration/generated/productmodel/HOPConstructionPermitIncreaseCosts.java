package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPConstructionPermitIncreaseCosts.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPConstructionPermitIncreaseCosts extends entity.HOPDwellingCov {
  protected HOPConstructionPermitIncreaseCosts()  {
    super((java.lang.Void)null);
  }
  
  public HOPConstructionPermitIncreaseCosts(entity.PolicyPeriod branch)  {
    super(branch, "z7ui0o2ttovs76h6rtk6q9gbeh8");
  }
  
  public HOPConstructionPermitIncreaseCosts(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z7ui0o2ttovs76h6rtk6q9gbeh8");
  }
  
  public productmodel.OptionHOPConstructionPermitIncreaseCostsLimitType getHOPConstructionPermitIncreaseCostsLimitTerm() {
    return (productmodel.OptionHOPConstructionPermitIncreaseCostsLimitType)getCovTerm("zpiisldptve6k4m41uo29bjk6ta");
  }
  
  public boolean getHasHOPConstructionPermitIncreaseCostsLimitTerm() {
    return hasCovTerm("zpiisldptve6k4m41uo29bjk6ta");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPConstructionPermitIncreaseCostsInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPConstructionPermitIncreaseCosts>() {
      public productmodel.HOPConstructionPermitIncreaseCosts newEmptyInstance() {
        return new productmodel.HOPConstructionPermitIncreaseCosts();
      }
      
      
    });
  }
}