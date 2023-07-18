package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/GLPestHerbicideApplicatorSchedule.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GLPestHerbicideApplicatorSchedule extends entity.GLLineScheduleCov {
  protected GLPestHerbicideApplicatorSchedule()  {
    super((java.lang.Void)null);
  }
  
  public GLPestHerbicideApplicatorSchedule(entity.PolicyPeriod branch)  {
    super(branch, "GLPestHerbicideApplicatorSchedule");
  }
  
  public GLPestHerbicideApplicatorSchedule(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "GLPestHerbicideApplicatorSchedule");
  }
  
  static {
    com.guidewire._generated.productmodel.GLPestHerbicideApplicatorScheduleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.GLPestHerbicideApplicatorSchedule>() {
      public productmodel.GLPestHerbicideApplicatorSchedule newEmptyInstance() {
        return new productmodel.GLPestHerbicideApplicatorSchedule();
      }
      
      
    });
  }
}