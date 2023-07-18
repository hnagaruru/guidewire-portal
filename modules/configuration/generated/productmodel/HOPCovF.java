package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCovF.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPCovF extends entity.HOPLineCov {
  protected HOPCovF()  {
    super((java.lang.Void)null);
  }
  
  public HOPCovF(entity.PolicyPeriod branch)  {
    super(branch, "z8tjsluucfmoh3nho364cli3uv8");
  }
  
  public HOPCovF(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z8tjsluucfmoh3nho364cli3uv8");
  }
  
  public productmodel.OptionHOPCovFLimitType getHOPCovFLimitTerm() {
    return (productmodel.OptionHOPCovFLimitType)getCovTerm("zr6hcc8odmd006c8d9biad684da");
  }
  
  public boolean getHasHOPCovFLimitTerm() {
    return hasCovTerm("zr6hcc8odmd006c8d9biad684da");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPCovFInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPCovF>() {
      public productmodel.HOPCovF newEmptyInstance() {
        return new productmodel.HOPCovF();
      }
      
      
    });
  }
}