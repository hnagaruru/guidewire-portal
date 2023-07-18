package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLAddCondoCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLAddCondoCov extends entity.GeneralLiabilityCov {
  protected GLAddCondoCov()  {
    super((java.lang.Void)null);
  }
  
  public GLAddCondoCov(entity.PolicyPeriod branch)  {
    super(branch, "GLAddCondoCov");
  }
  
  public GLAddCondoCov(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLAddCondoCov");
  }
  
  static {
    com.guidewire._generated.productmodel.GLAddCondoCovInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLAddCondoCov>() {
      public productmodel.GLAddCondoCov newEmptyInstance() {
        return new productmodel.GLAddCondoCov();
      }
      
      
    });
  }
}