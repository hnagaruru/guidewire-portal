package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeY2KCompAndElecProbSchedule.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeY2KCompAndElecProbSchedule extends entity.GLLineScheduleExcl {
  protected ExcludeY2KCompAndElecProbSchedule()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeY2KCompAndElecProbSchedule(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeY2KCompAndElecProbSchedule");
  }
  
  public ExcludeY2KCompAndElecProbSchedule(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeY2KCompAndElecProbSchedule");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeY2KCompAndElecProbScheduleInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeY2KCompAndElecProbSchedule>() {
      public productmodel.ExcludeY2KCompAndElecProbSchedule newEmptyInstance() {
        return new productmodel.ExcludeY2KCompAndElecProbSchedule();
      }
      
      
    });
  }
}