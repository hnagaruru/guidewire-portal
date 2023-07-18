package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAOwnedUMBISuppCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAOwnedUMBISuppCov extends entity.BAStateCov {
  protected BAOwnedUMBISuppCov()  {
    super((java.lang.Void)null);
  }
  
  public BAOwnedUMBISuppCov(entity.PolicyPeriod branch)  {
    super(branch, "BAOwnedUMBISuppCov");
  }
  
  public BAOwnedUMBISuppCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAOwnedUMBISuppCov");
  }
  
  public productmodel.PackageBAOwnedUMBISuppBIType getBAOwnedUMBISuppBITerm() {
    return (productmodel.PackageBAOwnedUMBISuppBIType)getCovTerm("BAOwnedUMBISuppBI");
  }
  
  public boolean getHasBAOwnedUMBISuppBITerm() {
    return hasCovTerm("BAOwnedUMBISuppBI");
  }
  
  static {
    com.guidewire._generated.productmodel.BAOwnedUMBISuppCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAOwnedUMBISuppCov>() {
      public productmodel.BAOwnedUMBISuppCov newEmptyInstance() {
        return new productmodel.BAOwnedUMBISuppCov();
      }
      
      
    });
  }
}