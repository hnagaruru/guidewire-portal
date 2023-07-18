package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLVendorsExcess.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLVendorsExcess extends entity.GeneralLiabilityCond {
  protected GLVendorsExcess()  {
    super((java.lang.Void)null);
  }
  
  public GLVendorsExcess(entity.PolicyPeriod branch)  {
    super(branch, "GLVendorsExcess");
  }
  
  public GLVendorsExcess(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLVendorsExcess");
  }
  
  static {
    com.guidewire._generated.productmodel.GLVendorsExcessInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLVendorsExcess>() {
      public productmodel.GLVendorsExcess newEmptyInstance() {
        return new productmodel.GLVendorsExcess();
      }
      
      
    });
  }
}