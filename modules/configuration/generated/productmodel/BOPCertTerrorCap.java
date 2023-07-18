package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPCertTerrorCap.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class BOPCertTerrorCap extends entity.BusinessOwnersCov {
  protected BOPCertTerrorCap()  {
    super((java.lang.Void)null);
  }
  
  public BOPCertTerrorCap(entity.PolicyPeriod branch)  {
    super(branch, "BOPCertTerrorCap");
  }
  
  public BOPCertTerrorCap(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "BOPCertTerrorCap");
  }
  
  public productmodel.DirectBOPCertTerrorCapLimitType getBOPCertTerrorCapLimitTerm() {
    return (productmodel.DirectBOPCertTerrorCapLimitType)getCovTerm("BOPCertTerrorCapLimit");
  }
  
  public boolean getHasBOPCertTerrorCapLimitTerm() {
    return hasCovTerm("BOPCertTerrorCapLimit");
  }
  
  static {
    com.guidewire._generated.productmodel.BOPCertTerrorCapInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.BOPCertTerrorCap>() {
      public productmodel.BOPCertTerrorCap newEmptyInstance() {
        return new productmodel.BOPCertTerrorCap();
      }
      
      
    });
  }
}