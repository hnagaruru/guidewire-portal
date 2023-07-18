package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeAbuseMolestation.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeAbuseMolestation extends entity.GeneralLiabilityExcl {
  protected ExcludeAbuseMolestation()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeAbuseMolestation(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeAbuseMolestation");
  }
  
  public ExcludeAbuseMolestation(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeAbuseMolestation");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeAbuseMolestationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeAbuseMolestation>() {
      public productmodel.ExcludeAbuseMolestation newEmptyInstance() {
        return new productmodel.ExcludeAbuseMolestation();
      }
      
      
    });
  }
}