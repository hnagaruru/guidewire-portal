package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/XCUHazardsAllowed.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class XCUHazardsAllowed extends entity.GeneralLiabilityCond {
  protected XCUHazardsAllowed()  {
    super((java.lang.Void)null);
  }
  
  public XCUHazardsAllowed(entity.PolicyPeriod branch)  {
    super(branch, "XCUHazardsAllowed");
  }
  
  public XCUHazardsAllowed(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "XCUHazardsAllowed");
  }
  
  public boolean getHasXCUHazardTerm() {
    return hasCovTerm("XCUHazard");
  }
  
  public boolean getHasXCULocationOperationTerm() {
    return hasCovTerm("XCULocationOperation");
  }
  
  public productmodel.GenericXCUHazardType getXCUHazardTerm() {
    return (productmodel.GenericXCUHazardType)getCovTerm("XCUHazard");
  }
  
  public productmodel.TypekeyXCULocationOperationType getXCULocationOperationTerm() {
    return (productmodel.TypekeyXCULocationOperationType)getCovTerm("XCULocationOperation");
  }
  
  static {
    com.guidewire._generated.productmodel.XCUHazardsAllowedInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.XCUHazardsAllowed>() {
      public productmodel.XCUHazardsAllowed newEmptyInstance() {
        return new productmodel.XCUHazardsAllowed();
      }
      
      
    });
  }
}