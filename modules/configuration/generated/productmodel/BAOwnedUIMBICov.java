package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/BAOwnedUIMBICov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BAOwnedUIMBICov extends entity.BAStateCov {
  protected BAOwnedUIMBICov()  {
    super((java.lang.Void)null);
  }
  
  public BAOwnedUIMBICov(entity.PolicyPeriod branch)  {
    super(branch, "BAOwnedUIMBICov");
  }
  
  public BAOwnedUIMBICov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BAOwnedUIMBICov");
  }
  
  public productmodel.PackageBAOwnedUIMBIType getBAOwnedUIMBITerm() {
    return (productmodel.PackageBAOwnedUIMBIType)getCovTerm("BAOwnedUIMBI");
  }
  
  public boolean getHasBAOwnedUIMBITerm() {
    return hasCovTerm("BAOwnedUIMBI");
  }
  
  static {
    com.guidewire._generated.productmodel.BAOwnedUIMBICovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BAOwnedUIMBICov>() {
      public productmodel.BAOwnedUIMBICov newEmptyInstance() {
        return new productmodel.BAOwnedUIMBICov();
      }
      
      
    });
  }
}