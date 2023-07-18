package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLWaiveSubrogation.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLWaiveSubrogation extends entity.GeneralLiabilityCond {
  protected GLWaiveSubrogation()  {
    super((java.lang.Void)null);
  }
  
  public GLWaiveSubrogation(entity.PolicyPeriod branch)  {
    super(branch, "GLWaiveSubrogation");
  }
  
  public GLWaiveSubrogation(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLWaiveSubrogation");
  }
  
  public productmodel.GenericGLWaiverDescriptionType getGLWaiverDescriptionTerm() {
    return (productmodel.GenericGLWaiverDescriptionType)getCovTerm("GLWaiverDescription");
  }
  
  public boolean getHasGLWaiverDescriptionTerm() {
    return hasCovTerm("GLWaiverDescription");
  }
  
  static {
    com.guidewire._generated.productmodel.GLWaiveSubrogationInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLWaiveSubrogation>() {
      public productmodel.GLWaiveSubrogation newEmptyInstance() {
        return new productmodel.GLWaiveSubrogation();
      }
      
      
    });
  }
}