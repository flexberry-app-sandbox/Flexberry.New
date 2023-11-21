package New.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import New.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Сотрудник
 */
@Entity(name = "IISNewСотрудник")
@Table(schema = "public", name = "Сотрудник")
public class Sotrudnik {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "IDдолжности")
    private Integer idдолжности;

    @Column(name = "IDсотрудника")
    private Integer idсотрудника;

    @Column(name = "IDПодразделения")
    private Integer idподразделения;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "ИНН")
    private Integer инн;

    @Column(name = "Снилс")
    private Integer снилс;

    @Column(name = "Номер_телефона")
    private Integer номер_телефона;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Dolzhnosti")
    @Convert("Dolzhnosti")
    @Column(name = "Должности", length = 16, unique = true, nullable = false)
    private UUID _dolzhnostiid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Dolzhnosti", insertable = false, updatable = false)
    private Dolzhnosti dolzhnosti;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Podrazdeleniya")
    @Convert("Podrazdeleniya")
    @Column(name = "Подразделения", length = 16, unique = true, nullable = false)
    private UUID _podrazdeleniyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Podrazdeleniya", insertable = false, updatable = false)
    private Podrazdeleniya podrazdeleniya;


    public Sotrudnik() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getIDдолжности() {
      return idдолжности;
    }

    public void setIDдолжности(Integer idдолжности) {
      this.idдолжности = idдолжности;
    }

    public Integer getIDсотрудника() {
      return idсотрудника;
    }

    public void setIDсотрудника(Integer idсотрудника) {
      this.idсотрудника = idсотрудника;
    }

    public Integer getIDПодразделения() {
      return idподразделения;
    }

    public void setIDПодразделения(Integer idподразделения) {
      this.idподразделения = idподразделения;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public Integer getИНН() {
      return инн;
    }

    public void setИНН(Integer инн) {
      this.инн = инн;
    }

    public Integer getСнилс() {
      return снилс;
    }

    public void setСнилс(Integer снилс) {
      this.снилс = снилс;
    }

    public Integer getНомер_телефона() {
      return номер_телефона;
    }

    public void setНомер_телефона(Integer номер_телефона) {
      this.номер_телефона = номер_телефона;
    }


}