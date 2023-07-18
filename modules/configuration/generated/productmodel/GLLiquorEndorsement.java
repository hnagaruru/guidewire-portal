package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLLiquorEndorsement.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLLiquorEndorsement extends entity.GeneralLiabilityCov {
  protected GLLiquorEndorsement()  {
    super((java.lang.Void)null);
  }
  
  public GLLiquorEndorsement(entity.PolicyPeriod branch)  {
    super(branch, "GLLiquorEndorsement");
  }
  
  public GLLiquorEndorsement(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLLiquorEndorsement");
  }
  
  public productmodel.GenericGLLiquorEventDescType getGLLiquorEventDescTerm() {
    return (productmodel.GenericGLLiquorEventDescType)getCovTerm("GLLiquorEventDesc");
  }
  
  public productmodel.GenericGLLiquorEventType getGLLiquorEventTerm() {
    return (productmodel.GenericGLLiquorEventType)getCovTerm("GLLiquorEvent");
  }
  
  public boolean getHasGLLiquorEventDescTerm() {
    return hasCovTerm("GLLiquorEventDesc");
  }
  
  public boolean getHasGLLiquorEventTerm() {
    return hasCovTerm("GLLiquorEvent");
  }
  
  static {
    com.guidewire._generated.productmodel.GLLiquorEndorsementInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLLiquorEndorsement>() {
      public productmodel.GLLiquorEndorsement newEmptyInstance() {
        return new productmodel.GLLiquorEndorsement();
      }
      
      
    });
  }
}