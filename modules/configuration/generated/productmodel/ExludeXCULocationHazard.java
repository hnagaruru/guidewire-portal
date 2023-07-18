package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExludeXCULocationHazard.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExludeXCULocationHazard extends entity.GeneralLiabilityExcl {
  protected ExludeXCULocationHazard()  {
    super((java.lang.Void)null);
  }
  
  public ExludeXCULocationHazard(entity.PolicyPeriod branch)  {
    super(branch, "ExludeXCULocationHazard");
  }
  
  public ExludeXCULocationHazard(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExludeXCULocationHazard");
  }
  
  public boolean getHasXCUHazardDescTerm() {
    return hasCovTerm("XCUHazardDesc");
  }
  
  public boolean getHasXCULocOpsTerm() {
    return hasCovTerm("XCULocOps");
  }
  
  public productmodel.GenericXCUHazardDescType getXCUHazardDescTerm() {
    return (productmodel.GenericXCUHazardDescType)getCovTerm("XCUHazardDesc");
  }
  
  public productmodel.TypekeyXCULocOpsType getXCULocOpsTerm() {
    return (productmodel.TypekeyXCULocOpsType)getCovTerm("XCULocOps");
  }
  
  static {
    com.guidewire._generated.productmodel.ExludeXCULocationHazardInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExludeXCULocationHazard>() {
      public productmodel.ExludeXCULocationHazard newEmptyInstance() {
        return new productmodel.ExludeXCULocationHazard();
      }
      
      
    });
  }
}